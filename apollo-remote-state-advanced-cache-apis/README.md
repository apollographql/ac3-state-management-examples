# apollo-remote-state-advanced-cache-apis

Summary: Hooking Apollo Client up to a remote GraphQL API, the client-side cache is smart enough to automatically update the cache after most mutations successfully complete. For mutations that perform interactions against arrays or have additional client-side side-effects, we can help the cache decide what to do next by writing our update logic in the `useMutation`'s `update` function.

This example uses the new Apollo Client 3 cache manipulation APIs: `cache.modify` and `cache.evict`. For users familiar with how cache normalization works, this approach is generally preferred because it provides more direct access to the cache over the simpler `cache.readQuery`/`cache.writeQuery` approach.

For those just starting out with Apollo Client, we recommend using the `cache.readQuery` and `cache.writeQuery` API example [found here](https://github.com/apollographql/ac3-state-management-examples/tree/master/apollo-remote-state) instead.

## Getting started

There is a `client/` and `server/` portion to this example.

### Running the client

To start the project, run the following commands:

```
cd client
npm install && npm run start
```

The app should start at http://localhost:3000/.

### Running the server

To start the project, run the following commands:

```
cd server
npm install && npm run start
```

The server should start at http://localhost:4000/.
