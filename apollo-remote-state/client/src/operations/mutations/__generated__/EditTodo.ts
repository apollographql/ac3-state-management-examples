/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditTodo
// ====================================================

export interface EditTodo_editTodo_todo {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface EditTodo_editTodo_error_TodoNotFoundError {
  __typename: "TodoNotFoundError";
  message: string;
}

export interface EditTodo_editTodo_error_TodoValidationError {
  __typename: "TodoValidationError";
  message: string;
}

export type EditTodo_editTodo_error = EditTodo_editTodo_error_TodoNotFoundError | EditTodo_editTodo_error_TodoValidationError;

export interface EditTodo_editTodo {
  __typename: "EditTodoResult";
  success: boolean;
  todo: EditTodo_editTodo_todo | null;
  error: EditTodo_editTodo_error | null;
}

export interface EditTodo {
  editTodo: EditTodo_editTodo;
}

export interface EditTodoVariables {
  id: number;
  text: string;
}
