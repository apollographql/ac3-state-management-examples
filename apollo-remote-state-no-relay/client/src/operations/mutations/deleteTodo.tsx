
import { gql, useMutation } from "@apollo/client";
import * as DeleteTodoTypes from './__generated__/DeleteTodo'
import { GET_ALL_TODOS } from "../queries/getAllTodos";
import { GetAllTodos } from "../queries/__generated__/GetAllTodos";

export const DELETE_TODO = gql`
  mutation DeleteTodo ($id: Int!) {
    deleteTodo (id: $id) {
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
      }
    }
  }
`

export function useDeleteTodo () {
  const [mutate, { data, error }] = useMutation<
    DeleteTodoTypes.DeleteTodo, 
    DeleteTodoTypes.DeleteTodoVariables
  >(
    DELETE_TODO,
    {
      update (cache, el) {
        const deletedId = el.data?.deleteTodo.todo?.id
        const allTodos = cache.readQuery<GetAllTodos>({ query: GET_ALL_TODOS });

        cache.writeQuery({
          query: GET_ALL_TODOS,
          data: {
            todos: allTodos?.todos.filter((t) => t?.id !== deletedId)
          }
        });

        cache.evict({ id: `Todo:${deletedId}`})
      }
    }
  )

  return { mutate, data, error };
}