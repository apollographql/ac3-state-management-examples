/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLastTodos
// ====================================================

export interface GetLastTodos_todos_edges_node {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface GetLastTodos_todos_edges {
  __typename: "TodosEdge";
  node: GetLastTodos_todos_edges_node;
}

export interface GetLastTodos_todos {
  __typename: "TodosConnection";
  edges: (GetLastTodos_todos_edges | null)[];
}

export interface GetLastTodos {
  todos: GetLastTodos_todos;
}
