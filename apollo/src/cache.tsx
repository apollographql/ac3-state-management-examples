import { InMemoryCache } from "@apollo/client";

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
        visibilityFilter: {
          read () {
            return visibilityFilterVar();
          },
          merge (existing, incoming) {
            debugger;
          }
        }
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

export type VisiblityFilter = {
  id: string;
  displayName: string;
}

export const VisibilityFilters: { [filter: string]: VisiblityFilter } = {
  SHOW_ALL: {
    id: "show_all",
    displayName: "All"
  },
  SHOW_COMPLETED: {
    id: "show_completed",
    displayName: "Completed"
  },
  SHOW_ACTIVE: {
    id: "show_active",
    displayName: "Active"
  }
}



const todosInitialValue: Todos = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3"
  }
]

export const todosVar = cache.makeVar<Todos>(
  todosInitialValue
);

export const visibilityFilterVar = cache.makeVar<VisiblityFilter>(
  VisibilityFilters.SHOW_ALL
)