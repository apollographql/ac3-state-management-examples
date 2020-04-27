
import { gql, useMutation } from "@apollo/client";
import * as AddTodoTypes from './__generated__/AddTodo';
import { GET_ALL_TODOS } from "../queries/getAllTodos";
import { GetAllTodos } from "../__generated__/GetAllTodos";

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

/** 
 * This is the first way that I attempted to get this to work 
 * and it "DOES" work now that I figured out the response type for 
 * this thing correctly.
 */

// export function useAddTodo () {
//   const [mutate, { data, error }] = useMutation<
//     AddTodoTypes.AddTodo, 
//     AddTodoTypes.AddTodoVariables
//   >(
//     ADD_TODO,
//     {
//       update (cache, { data }) {
//         cache.modify('ROOT_QUERY', {
//           todos (existingTodos, { toReference }) {
//             return {
//               ...existingTodos,
//               edges: [...existingTodos.edges, 
//                 //@ts-ignore
//                 { __typename: 'TodosEdge', node: toReference(data.addTodo.todo) }
//               ]   
//             }          
//           }
//         })

//       }
//     }
//   )
//   return { mutate, data, error };
// }

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
              todos: {
                edges: [
                  ...existingTodos?.todos.edges,
                  { __typename: 'TodosEdge', node: newTodoFromResponse },
                ],
              },
            },
          });
        }
      }
    }
  )
  return { mutate, data, error };
}