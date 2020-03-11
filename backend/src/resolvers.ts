import {
  Todo,
  Resolvers,
  TodosConnection
} from "./generated/graphql";
import { PaginationUtils } from "./shared/utils/paginationUtils";
import { TodoMapper } from "./shared/mappers/todoMapper";

const todos: Todo[] = [
  { id: 1, text: "Getting started", completed: false },
  { id: 2, text: "Second todo", completed: false },
  { id: 3, text: "Third todo", completed: false },
];

const resolvers: Resolvers = {
  Query: {
    todos: (_, { after, before, first, last }): TodosConnection => {
      
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
