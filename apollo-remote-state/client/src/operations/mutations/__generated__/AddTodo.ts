/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddTodo
// ====================================================

export interface AddTodo_addTodo_todo {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface AddTodo_addTodo_error {
  __typename: "TodoValidationError";
  message: string;
}

export interface AddTodo_addTodo {
  __typename: "AddTodoResult";
  success: boolean;
  todo: AddTodo_addTodo_todo | null;
  error: AddTodo_addTodo_error | null;
}

export interface AddTodo {
  addTodo: AddTodo_addTodo;
}

export interface AddTodoVariables {
  text: string;
}
