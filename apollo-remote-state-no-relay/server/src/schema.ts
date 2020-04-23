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
    ): [Todo]!

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

  type ClearCompletedTodosResult {
    success: Boolean!
    todos: [Todo]!
  }

  type CompleteAllTodosResult {
    success: Boolean!
    todos: [Todo]!
  }

  type DeleteTodoResult {
    success: Boolean!
    todo: Todo
    error: TodoNotFoundError
  }

  union EditTodoError = TodoNotFoundError | TodoValidationError

  type EditTodoResult {
    success: Boolean!
    todo: Todo 
    error: EditTodoError
  }

  type Mutation {
    addTodo (text: String!): AddTodoResult!
    clearCompletedTodos: ClearCompletedTodosResult!
    completeTodo (id: Int!): CompleteTodoResult!
    completeAllTodos: CompleteAllTodosResult!
    deleteTodo (id: Int!): DeleteTodoResult!
    editTodo (id: Int!, text: String!): EditTodoResult!
  }
`

export { typeDefs }