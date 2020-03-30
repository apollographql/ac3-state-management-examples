<h2 align="center">Apollo Client 3 State Management Examples</h2>

<p align="center">Learn how to use AC3 for local and remote state management</p>

## About

[Apollo Client 3](https://www.apollographql.com/docs/react/v3.0-beta/migrating/apollo-client-3-migration/) is a state management library that enables you to work with remote GraphQL data. Apollo Client handles all of the data fetching logic for you- all you have to do is write the queries and mutations, and you're good to go.

We have found that it can be challenging for developers coming from another state management library (like [Redux](https://redux.js.org/)) to fully grasp the AC3-way of doing things.

This repo contains several versions of the same Todo app, both Apollo Client and Redux examples, to demonstrate best practices on using Apollo Client to build applications using solely **local state** in addition to the real-world **remote state** use case.

![](https://user-images.githubusercontent.com/6892666/76266873-4cd96a00-623f-11ea-8367-e0735d63a54f.png)

## Examples

### Apollo Local State Example

Using Apollo Client 3's **Reactive Variables API** (docs/blog post coming soon), we can store the entire application state locally (and optionally persist it local storage).

[Check out the local state example](https://github.com/apollographql/ac3-state-management-examples/tree/master/apollo-local-state).

### Apollo Remote State Example

[Check out the remote state example](https://github.com/apollographql/ac3-state-management-examples/tree/master/apollo-remote-state)

### Redux Local State Example

[Check out the local state (with Redux) example](https://github.com/apollographql/ac3-state-management-examples/tree/master/redux-local-state)
 
