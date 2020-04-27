import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ApolloClient, ApolloProvider } from '@apollo/client';
import 'todomvc-app-css/index.css'
import { cache } from './cache';

export const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/',
  headers: {
    authorization: localStorage.getItem('token') || '',
    'client-name': 'ac3-todos-backend',
    'client-version': '1.0.0',
  },
  connectToDevTools: true,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
