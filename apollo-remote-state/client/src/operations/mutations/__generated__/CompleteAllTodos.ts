/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CompleteAllTodos
// ====================================================

export interface CompleteAllTodos_completeAllTodos_todos {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface CompleteAllTodos_completeAllTodos {
  __typename: "CompleteAllTodosResult";
  success: boolean;
  todos: (CompleteAllTodos_completeAllTodos_todos | null)[];
}

export interface CompleteAllTodos {
  completeAllTodos: CompleteAllTodos_completeAllTodos;
}
