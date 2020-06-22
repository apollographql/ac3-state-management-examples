/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodoById
// ====================================================

export interface GetTodoById_todo_Todo {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface GetTodoById_todo_TodoNotFoundError {
  __typename: "TodoNotFoundError";
  message: string;
}

export type GetTodoById_todo = GetTodoById_todo_Todo | GetTodoById_todo_TodoNotFoundError;

export interface GetTodoById {
  todo: GetTodoById_todo;
}

export interface GetTodoByIdVariables {
  id: number;
}
