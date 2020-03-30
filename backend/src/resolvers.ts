import {
  Todo,
  Resolvers,
  TodosConnection,
  TodoResult,
  AddTodoResult,
  CompleteTodoResult,
  ClearCompletedTodosResult,
  CompleteAllTodosResult
} from "./generated/graphql";
import { PaginationUtils } from "./shared/utils/paginationUtils";
import { TodoMapper } from "./shared/mappers/todoMapper";
import { Context } from './index'

const resolvers: Resolvers = {
  Mutation: {
    addTodo: async (_, { text }, context: Context): Promise<AddTodoResult> => {
      const { todosRepo } = context;
      try {
        await todosRepo.addTodo(text);
        const todo = await todosRepo.getLastTodo();
        return { success: true, todo }
      } catch (err) {
        return { success: false, error: { message: 'Todo must be greater than 3 chars' } }
      }
    },
    completeTodo: async (_, { id }, context: Context): Promise<CompleteTodoResult> => {
      const { todosRepo } = context;
      let todo; 

      try {
        todo = await todosRepo.getTodoById(id);
      } catch (err) {
        return { success: false, error: { message: 'Todo not found' } }
      }
      
      if (todo.completed) {
        return { success: false, error: { message: 'Already completed this todo!' }}
      }

      await todosRepo.completeTodo(id);
      todo = await todosRepo.getTodoById(id)

      return { success: true, todo }
    },
    clearCompletedTodos: async (_, __, context: Context): Promise<ClearCompletedTodosResult> => {
      const { todosRepo } = context;
      await todosRepo.clearCompletedTodos();
      const todos = await todosRepo.getAllTodos();
      return { success: true, todos }
    },
    completeAllTodos: async (_, __, context: Context): Promise<CompleteAllTodosResult> => {
      const { todosRepo } = context;
      await todosRepo.completeAllTodos();
      const todos = await todosRepo.getAllTodos();
      return { success: true, todos }
    }
  },
  Query: {
    todos: async (_, { after, before, first, last }, context: Context): Promise<TodosConnection> => {
      const { todosRepo } = context;
      const todos = await todosRepo.getAllTodos();

      let queryTodos: Todo[] = [];
      const limitResult = PaginationUtils
        .limitByFirstAndLast(todos, first, last);
      
      if (limitResult.isFailure) {
        throw new Error(limitResult.error as string);
      } else {
        queryTodos = limitResult.getValue();
      }

      queryTodos = PaginationUtils
        .filterByBeforeAndAfter(queryTodos, after, before) as Todo[];

      return TodoMapper.toTodosConnection(queryTodos);
    },
    todo: async (_, { id }, context: Context): Promise<TodoResult> => {
      const { todosRepo } = context;
      try {
        const todo = await todosRepo.getTodoById(id);
        return todo;
      } catch (err) {
        return { message: `Todo with id ${id} not found.` }
      } 
    },
  },
  TodoResult: {
    __resolveType (obj) {

      if(obj.hasOwnProperty('id')){
        return 'Todo';
      }

      if(obj.hasOwnProperty('message')){
        return 'TodoNotFoundError';
      }

      return null;
    },
  },
  CompleteTodoError: {
    __resolveType (obj) {

      if(obj.message === 'Already completed this todo!'){
        return 'TodoAlreadyCompletedError';
      }

      return 'TodoNotFoundError'

    },
  }
};

export { resolvers };
