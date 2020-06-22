

import { gql, useMutation } from "@apollo/client";
import * as EditTodoTypes from './__generated__/EditTodo'

export const EDIT_TODO = gql`
  mutation EditTodo ($id: Int!, $text: String!) {
    editTodo (id: $id, text: $text) {
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
        ... on TodoValidationError {
          message
        }
      }
    }
  }
`

/**
 * An update function is not needed for edits against single-item updates
 * because the cache will automatically update the cached version of the 
 * item stored flat on the cache if we return the new item in the mutation
 * response.
 */

export function useEditTodo () {
  const [mutate, { data, error }] = useMutation<
    EditTodoTypes.EditTodo, 
    EditTodoTypes.EditTodoVariables
  >(
    EDIT_TODO
  )

  return { mutate, data, error };
}

