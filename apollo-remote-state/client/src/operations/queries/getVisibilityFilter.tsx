
import { gql } from "@apollo/client";

export const GET_VISIBILITY_FILTER = gql`
  query GetVisibilityFilter {
    visibilityFilter @client {
      id 
      displayName
    }
  }
`