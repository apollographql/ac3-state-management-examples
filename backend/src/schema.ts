import { gql } from "apollo-server";

const typeDefs = gql`
  type PageInfo {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
    startCursor: String!
    endCursor: String!
  }

  type Todo {
    id: Int!
    text: String! 
    completed: Boolean!
  }

  type TodosEdge {
    node: Todo!
    cursor: String!
  }

  type TodosConnection {
    edges: [TodosEdge]!
    pageInfo: PageInfo!
  }

  type TodoNotFoundError {
    message: String!
  }

  union TodoResult = Todo | TodoNotFoundError

  type Query {
    todos (
      after: String, 
      before: String, 
      first: Int, 
      last: Int
    ): TodosConnection!

    todo (id: Int!): TodoResult!
  }

  type TodoAlreadyCompletedError {
    message: String!
  }

  union CompleteTodoError = TodoNotFoundError | TodoAlreadyCompletedError

  type CompleteTodoResult {
    success: Boolean!
    todo: Todo
    error: CompleteTodoError
  }

  type TodoValidationError {
    message: String!
  }

  type AddTodoResult {
    success: Boolean!
    todo: Todo
    error: TodoValidationError
  }

  # type ClearCompletedTodosResult {
  #   success: Boolean!
  #   todos: [Todo]!
  # }

  type Mutation {
    addTodo (text: String!): AddTodoResult!
    # clearCompletedTodos (): ClearCompletedTodosResult!
    completeTodo (id: Int!): CompleteTodoResult!
  }
`

export { typeDefs }