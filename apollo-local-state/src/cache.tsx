
import { InMemoryCache } from "@apollo/client";

export interface Todo {
  text: string;
  completed: boolean;
  id: number
}

export type Todos = Todo[];

export const cache: InMemoryCache = new InMemoryCache({});

// Create reactive variable
export const todosVar = cache.makeVar<Todos>();

// Set the value 
const todosInitialValue: Todos = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3"
  }
]

todosVar(todosInitialValue);

// Get the value
const currentTodosValue = todosVar();

// export const cache: InMemoryCache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         todos: {
//           read () {
//             return todosVar();
//           }
//         },
//         visibilityFilter: {
//           read () {
//             return visibilityFilterVar();
//           },
//           merge (existing, incoming) {}
//         }
//       }
//     }
//   }
// });

/**
 * Set initial values when we create cache variables.
 */

// const todosInitialValue: Todos = [
//   {
//     id: 0,
//     completed: false,
//     text: "Use Apollo Client 3"
//   }
// ]

// export const todosVar: ReactiveVar<Todos> = cache.makeVar<Todos>(
//   todosInitialValue
// );

// export const visibilityFilterVar = cache.makeVar<VisiblityFilter>(
//   VisibilityFilters.SHOW_ALL
// )