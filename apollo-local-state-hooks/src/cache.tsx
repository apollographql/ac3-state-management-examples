
import { InMemoryCache, ReactiveVar } from "@apollo/client";
import { Todos } from "./models/Todos";
import { VisiblityFilter, VisibilityFilters } from "./models/VisibilityFilter";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read () {
            return todosVar();
          }
        },
        visibilityFilter: {
          read () {
            return visibilityFilterVar();
          },
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

export const todosVar: ReactiveVar<Todos> = cache.makeVar<Todos>(
  todosInitialValue
);

export const visibilityFilterVar = cache.makeVar<VisiblityFilter>(
  VisibilityFilters.SHOW_ALL
)