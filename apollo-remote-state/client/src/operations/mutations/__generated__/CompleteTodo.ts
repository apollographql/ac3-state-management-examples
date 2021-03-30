/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CompleteTodo
// ====================================================

export interface CompleteTodo_completeTodo_todo {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface CompleteTodo_completeTodo_error_TodoNotFoundError {
  __typename: "TodoNotFoundError";
  message: string;
}

export interface CompleteTodo_completeTodo_error_TodoAlreadyCompletedError {
  __typename: "TodoAlreadyCompletedError";
  message: string;
}

export type CompleteTodo_completeTodo_error = CompleteTodo_completeTodo_error_TodoNotFoundError | CompleteTodo_completeTodo_error_TodoAlreadyCompletedError;

export interface CompleteTodo_completeTodo {
  __typename: "CompleteTodoResult";
  success: boolean;
  todo: CompleteTodo_completeTodo_todo | null;
  error: CompleteTodo_completeTodo_error | null;
}

export interface CompleteTodo {
  completeTodo: CompleteTodo_completeTodo;
}

export interface CompleteTodoVariables {
  id: number;
}
