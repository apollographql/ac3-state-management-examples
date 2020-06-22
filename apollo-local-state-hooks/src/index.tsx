import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ApolloClient, ApolloProvider } from '@apollo/client';
import 'todomvc-app-css/index.css'
import { cache } from './cache';
import { persistCache } from 'apollo-cache-persist'

// await before instantiating ApolloClient, else queries might run before the cache is persisted
persistCache({
  cache,
  storage: window.localStorage as any,
})

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
