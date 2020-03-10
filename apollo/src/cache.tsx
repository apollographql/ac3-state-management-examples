
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
 * TODO: Write initial values
 */


// TODO: Create local cache variables

export const todosVar = () => {};

export const visibilityFilterVar = () => {};