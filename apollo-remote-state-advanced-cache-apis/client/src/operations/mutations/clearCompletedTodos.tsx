
import { gql, useMutation } from "@apollo/client";
import * as ClearCompletedTodosTypes from './__generated__/ClearCompletedTodos'

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

        let todoIdsToDelete: number[] = [];

        cache.modify({
          todos (existingTodosConnection, { readField }) {

            const newTodos = {
              ...existingTodosConnection,
              edges: existingTodosConnection.edges.filter((edge: any) => {
                const shouldDelete = readField('completed', edge.node);
                
                if (shouldDelete) {
                  todoIdsToDelete.push(readField('id', edge.node))
                }
                
                return !shouldDelete;
              })
            }
            
            return newTodos;
          }
        })

        todoIdsToDelete?.forEach((todoId) => {
          cache.evict(`Todo:${todoId}`)
        })
      }
    }
  )

  return { mutate, data, error };
}