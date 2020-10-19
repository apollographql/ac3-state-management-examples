# apollo-local-state

> Summary: Using Apollo Client 3's **Reactive Variables API**, we can store the entire application state locally (and optionally persist it using local storage).

The key components that make this work are:

- Reactive Variables: Holds onto local state. Perform _local mutations_ against them. Used in conjunction with cache policies, can act as a replacement for client-side resolvers from AC2.x.
- Cache Policies: Can perform pre-processing on any `query` or `mutation` before the field is returned. Combining this with Reactive Variables broadcasts changes to all client-side queries.

## Getting started

To start the project, run the following commands:

```
npm install && npm run start
```

The app should start at `http://localhost:3000/`.
