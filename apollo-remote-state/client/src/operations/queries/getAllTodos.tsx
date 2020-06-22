
import { gql } from "@apollo/client";

export const GET_ALL_TODOS = gql`
  query GetAllTodos {
    todos {
      edges {
        node {
          id
          text
          completed
          isSelected @client
        }
      }
    }
  }
`