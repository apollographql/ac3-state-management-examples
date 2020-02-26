import { InMemoryCache, Reference } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos () {
          return todosVar();
        },
        visibilityFilter () {
          return visibilityFilterVar();
        },
        launches: {
          merge(existing, incoming) {
            let launches: Reference[] = [];
            if (existing && existing.launches) {
              launches = launches.concat(existing.launches);
            }
            if (incoming && incoming.launches) {
              launches = launches.concat(incoming.launches);
            }
            return {
              ...incoming,
              launches
            };
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

export enum VisiblityFilter {
  SHOW_ALL = "show_all",
  SHOW_COMPLETED = "show_completed",
  SHOW_ACTIVE = "show_active"
}

export const todosVar = cache.makeVar<Todos>([]);

export const visibilityFilterVar = cache.makeVar<VisiblityFilter>(
  VisiblityFilter.SHOW_ALL
)