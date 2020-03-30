# apollo-remote-state

Summary: Hooking Apollo Client up to a remote GraphQL API, the client-side cache is smart enough to automatically update the cache after most mutations successfully complete. For mutations that perform interactions against arrays or have additional client-side side-effects, we can help the cache decide what to do next by writing our update logic in the `useMutation`'s `update` function.

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
