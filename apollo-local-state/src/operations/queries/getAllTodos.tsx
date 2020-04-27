
import { gql } from "@apollo/client";

export const GET_ALL_TODOS = gql`
  query GetAllTodos {
    todos @client { 
      id  
      text  
      completed
    }
  }
`