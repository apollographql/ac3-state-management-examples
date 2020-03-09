
import { InMemoryCache } from "@apollo/client";
import { VisibilityFilters, VisiblityFilter } from "./models/VisibilityFilter";
import { Todos } from "./models/Todos";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read (existing, { args, variables }) {
            return todosVar();
          },
          merge (existing, { args, variables }) {}
        },
        visibilityFilter: {
          read () {
            return visibilityFilterVar();
          },
          merge (existing, incoming) {}
        }
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */

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