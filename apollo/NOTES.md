
## How do I set initial data for something?

Q: In Redux, we have the concept of initial state. What would you recommend for doing this?

A: You can use makeVar and give it some default data.

```typescript
import { InMemoryCache, Reference } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos () {
          return todosVar();
        },
      }
    }
  }
});

const todosInitialValue: Todos = [
  {
    id: 0,
    completed: false,
    text: "Use Apollo Client 3"
  }
]

export const todosVar = cache.makeVar<Todos>(todosInitialValue);
```

## If there is no remote GraphQL uri yet (because I'm doing everything locally), or if I never actually intend for there to be one at all, what can I do? It says I need to pass in a valid uri.

A: If you just need to stub out a GraphQL endpoint for some reason and you don't ever really want to connect to a remote one, you can use 

```typescript
const client = new ApolloClient({
  cache,
  link: ApolloLink.empty()
});
```

This is nice because you can be explicit about _nothingness_.

It's common for when:

- We're building something on the client-side and don't want to try to reach out to a remote GraphQL server yet because (A: it's not ready, B: we will never need one).

