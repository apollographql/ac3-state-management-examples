<h2 align="center">Apollo Client 3 State Management Examples</h2>

<p align="center">Learn how to use AC3 for local and remote state management</p>

## About

[Apollo Client 3](https://www.apollographql.com/docs/react/v3.0-beta/migrating/apollo-client-3-migration/) is a state management library that enables you to work with remote GraphQL data. Apollo Client handles all of the data fetching logic for you- all you have to do is write the queries and mutations, and you're good to go.

However, for a tool with a lot of capabilities, it can be challenging for developers moving from another state management library (like [Redux](https://redux.js.org/)) to fully grasp the AC3-way of doing things.

This repo contains several versions of the same Todo app, in order to demonstrate best practices on using Apollo Client to build applications using solely **local state** in addition to a more real-world **remote state** use case.

![](https://user-images.githubusercontent.com/6892666/76266873-4cd96a00-623f-11ea-8367-e0735d63a54f.png)

## Running the app

To run the Apollo version:

```bash
cd apollo
npm install && npm run start
```

To run the Redux version:

```
cd redux
npm install && npm run start
```
