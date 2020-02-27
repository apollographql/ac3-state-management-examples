import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ApolloClient, ApolloLink, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import 'todomvc-app-css/index.css'
import { cache } from './cache';

const client = new ApolloClient({
  cache,
  link: ApolloLink.empty()
});

client
  .query({
    query: gql`
      {
        todos { 
          id @client
          text @client
          completed @client
        }
      }
    `
  })
  .then(result => console.log(result));

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
