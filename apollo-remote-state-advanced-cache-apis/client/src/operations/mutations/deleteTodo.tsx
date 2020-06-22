
import { gql, useMutation } from "@apollo/client";
import * as DeleteTodoTypes from './__generated__/DeleteTodo'

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
        
        cache.modify({
          todos (existingTodos, { readField }) {
        
            const newTodos = {
              ...existingTodos,
              edges: existingTodos.edges.filter((edge: any) => {
                return deletedId !== readField('id', edge.node);
              })
            }
            
            return newTodos;
          }
        });

        cache.evict(`Todo:${deletedId}`)
      }
    }
  )

  return { mutate, data, error };
}