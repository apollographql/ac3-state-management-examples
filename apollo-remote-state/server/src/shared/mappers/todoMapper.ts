import { Todo, TodosConnection, TodosEdge } from "../../generated/graphql";

export class TodoMapper {

  public static toEdge (todo: Todo): TodosEdge {
    return {
      node: todo,
      cursor: ""
    };
  }
  
  public static toTodosConnection (todos: Todo[]) : TodosConnection {
    return {
      edges: todos.map(t => this.toEdge(t)),
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false,
        startCursor: "",
        endCursor: ""
      }
    };
  }

}