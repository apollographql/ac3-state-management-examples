
import { InMemoryCache } from "@apollo/client";
import { VisibilityFilters, VisiblityFilter } from "./models/VisibilityFilter";
import { Todos } from "./models/Todos";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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


export const todosVar = cache.makeVar<Todos>(
  
);

export const visibilityFilterVar = cache.makeVar<VisiblityFilter>(
  VisibilityFilters.SHOW_ALL
)