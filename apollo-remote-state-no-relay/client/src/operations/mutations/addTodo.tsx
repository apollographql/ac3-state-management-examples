
import { gql, useMutation } from "@apollo/client";
import * as AddTodoTypes from './__generated__/AddTodo';
import { GET_ALL_TODOS } from "../queries/getAllTodos";
import { GetAllTodos } from "../queries/__generated__/GetAllTodos";

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
      update (cache, { data }) {
        const newTodoFromResponse = data?.addTodo.todo;
        const existingTodos = cache.readQuery<GetAllTodos>({
          query: GET_ALL_TODOS,
        });

        if (existingTodos && newTodoFromResponse) {
          cache.writeQuery({
            query: GET_ALL_TODOS,
            data: {
              todos: [
                ...existingTodos?.todos,
                newTodoFromResponse,
              ],
            },
          });
        }
      }
    }
  )
  return { mutate, data, error };
}