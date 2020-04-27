/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllTodos
// ====================================================

export interface GetAllTodos_todos_edges_node {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface GetAllTodos_todos_edges {
  __typename: "TodosEdge";
  node: GetAllTodos_todos_edges_node;
}

export interface GetAllTodos_todos {
  __typename: "TodosConnection";
  edges: (GetAllTodos_todos_edges | null)[];
}

export interface GetAllTodos {
  todos: GetAllTodos_todos;
}
