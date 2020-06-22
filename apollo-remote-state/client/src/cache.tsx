
import { InMemoryCache } from "@apollo/client";
import { VisibilityFilters, VisiblityFilter } from "./models/VisibilityFilter";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Todo: {
      fields: {
        isSelected: {
          read (value, opts) {
            const todoId = opts.readField('id');
            const selected = !!currentSelectedTodoIds()
              .find((id) => id === todoId)
              
            return selected;
          },
          merge (value, opts) {
            console.log('merge', value, opts)
            return false;
          }
        }
      }
    },
    Query: {
      fields: {
        visibilityFilter: {
          read () {
            return visibilityFilterVar();
          }
        }
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */

export const visibilityFilterVar = cache.makeVar<VisiblityFilter>(
  VisibilityFilters.SHOW_ALL
)

export const currentSelectedTodoIds = cache.makeVar<number[]>([]);