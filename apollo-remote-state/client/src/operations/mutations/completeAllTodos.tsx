
import { gql, useMutation } from "@apollo/client";
import * as CompleteAllTodosTypes from './__generated__/CompleteAllTodos'

export const COMPLETE_ALL_TODOS = gql`
  mutation CompleteAllTodos {
    completeAllTodos {
      success
      todos {
        id 
        text
        completed
      }
    }
  }
`

export function useCompleteAllTodos () {
  const [mutate, { data, error }] = useMutation<
    CompleteAllTodosTypes.CompleteAllTodos
  >(
    COMPLETE_ALL_TODOS
  )

  return { mutate, data, error };
}