/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodo
// ====================================================

export interface DeleteTodo_deleteTodo_todo {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface DeleteTodo_deleteTodo_error {
  __typename: "TodoNotFoundError";
  message: string;
}

export interface DeleteTodo_deleteTodo {
  __typename: "DeleteTodoResult";
  success: boolean;
  todo: DeleteTodo_deleteTodo_todo | null;
  error: DeleteTodo_deleteTodo_error | null;
}

export interface DeleteTodo {
  deleteTodo: DeleteTodo_deleteTodo;
}

export interface DeleteTodoVariables {
  id: number;
}
