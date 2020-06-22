
import { gql } from "@apollo/client";

export const GET_TODO_BY_ID = gql`
  query GetTodoById($id: Int!) {
    todo (id: $id) {
      ... on Todo {
        id
        text
        completed
      }
      ... on TodoNotFoundError {
        message
      }
    }
  }
`