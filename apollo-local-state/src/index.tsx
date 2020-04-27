import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import 'todomvc-app-css/index.css'
import { cache } from './cache';

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
