
import { gql, useMutation } from "@apollo/client";
import * as AddTodoTypes from './__generated__/AddTodo';
import { GET_ALL_TODOS } from "../queries/getAllTodos";

export const ADD_TODO = gql`
  mutation AddTodo ($text: String!) {
    addTodo (text: $text) {
      success
      todo {
        id
        text 
        completed
      }
      error {
        message
      }
    }
  }
`

export function useAddTodo () {
  const [mutate, { data, error }] = useMutation<
    AddTodoTypes.AddTodo, 
    AddTodoTypes.AddTodoVariables
  >(
    ADD_TODO,
    {
      refetchQueries: [{
        query: GET_ALL_TODOS
      }]
    }
  )
  return { mutate, data, error };
}