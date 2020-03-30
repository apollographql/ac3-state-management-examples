/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ClearCompletedTodos
// ====================================================

export interface ClearCompletedTodos_clearCompletedTodos_todos {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface ClearCompletedTodos_clearCompletedTodos {
  __typename: "ClearCompletedTodosResult";
  success: boolean;
  todos: (ClearCompletedTodos_clearCompletedTodos_todos | null)[];
}

export interface ClearCompletedTodos {
  clearCompletedTodos: ClearCompletedTodos_clearCompletedTodos;
}
