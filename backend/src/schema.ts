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

  type Query {
    todos (
      after: String, 
      before: String, 
      first: Int, 
      last: Int
    ): TodosConnection!
  }
`

export { typeDefs }