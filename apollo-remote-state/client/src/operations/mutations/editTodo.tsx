

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

export function useEditTodo () {
  const [mutate, { data, error }] = useMutation<
    EditTodoTypes.EditTodo, 
    EditTodoTypes.EditTodoVariables
  >(
    EDIT_TODO
  )

  return { mutate, data, error };
}