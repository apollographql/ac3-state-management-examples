
import { gql, useMutation } from "@apollo/client";
import * as CompleteTodoTypes from './__generated__/CompleteTodo'
import { GET_ALL_TODOS } from "../queries/getAllTodos";

export const COMPLETE_TODO = gql`
  mutation CompleteTodo ($id: Int!) {
    completeTodo (id: $id) {
      success
      todo {
        id
        text 
        completed
      }
      error {
        ... on TodoNotFoundError {
          message
        }
        ... on TodoAlreadyCompletedError {
          message
        }
      }
    }
  }
`

export function useCompleteTodo () {
  const [mutate, { data, error }] = useMutation<
    CompleteTodoTypes.CompleteTodo, 
    CompleteTodoTypes.CompleteTodoVariables
  >(
    COMPLETE_TODO,
    {
      refetchQueries: [{
        query: GET_ALL_TODOS
      }]
    }
  )

  return { mutate, data, error };
}