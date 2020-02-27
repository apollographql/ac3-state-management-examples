
import React from 'react'
import * as TodoActions from '../actions'
import MainSection from '../components/MainSection'
import { gql, useQuery } from '@apollo/client'
import { Todos, todosVar } from '../cache'

export const GET_ALL_TODOS = gql`
  query GetAllTodos {
    todos {
      id @client 
      text @client 
      completed @client
    }
  }
`

export default function Main () {
  const { data } = useQuery(GET_ALL_TODOS);
  const todos: Todos = data.todos;

  const completeAllTodos = () => {
    todosVar(todos.map((t) => ({ ...t, completed: true })))
  }

  return (
    <MainSection
      todosCount={todos.length}
      completedCount={todos.filter(t => t.completed).length}
      actions={{
        completeAllTodos: completeAllTodos
      }}
    />
  );
};

