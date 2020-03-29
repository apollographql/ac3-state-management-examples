import {
  Todo,
  Resolvers,
  TodosConnection
} from "./generated/graphql";
import { PaginationUtils } from "./shared/utils/paginationUtils";
import { TodoMapper } from "./shared/mappers/todoMapper";
import { Context } from './index'

const resolvers: Resolvers = {
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
    }
  }
};

export { resolvers };
