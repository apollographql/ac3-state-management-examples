import { InMemoryCache, Reference } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read () {
            return todosVar();
          },
          merge (existing, incoming) {
            debugger;
          }
        },
        visibilityFilter () {
          return visibilityFilterVar();
        },
      }
    }
  }
});

export interface Todo {
  text: string;
  completed: boolean;
  id: number
}

export type Todos = Todo[];

export enum VisiblityFilter {
  SHOW_ALL = "show_all",
  SHOW_COMPLETED = "show_completed",
  SHOW_ACTIVE = "show_active"
}

const todosInitialValue: Todos = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3"
  }
]

export const todosVar = cache.makeVar<Todos>(todosInitialValue);

export const visibilityFilterVar = cache.makeVar<VisiblityFilter>(
  VisiblityFilter.SHOW_ALL
)