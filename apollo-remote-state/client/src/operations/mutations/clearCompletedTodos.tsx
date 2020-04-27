
import { gql, useMutation } from "@apollo/client";
import * as ClearCompletedTodosTypes from './__generated__/ClearCompletedTodos'
import * as GetAllTodosTypes from '../queries/__generated__/GetAllTodos'
import { GET_ALL_TODOS } from "../queries/getAllTodos";

export const CLEAR_COMPLETED_TODOS = gql`
  mutation ClearCompletedTodos {
    clearCompletedTodos {
      success
      todos {
        id 
        text
        completed
      }
    }
  }
`

export function useClearCompletedTodos () {
  const [mutate, { data, error }] = useMutation<
    ClearCompletedTodosTypes.ClearCompletedTodos
  >(
    CLEAR_COMPLETED_TODOS,
    {
      update (cache) {
        const result = cache.readQuery<GetAllTodosTypes.GetAllTodos>({
          query: GET_ALL_TODOS
        });
        const todosToDelete = result?.todos.edges.map((n) => n?.node);

        todosToDelete?.forEach((todo) => {
          cache.evict(`Todo:${todo?.id}`)
        })
      }
    }
  )

  return { mutate, data, error };
}