
import React from 'react'
import MainSection from '../components/MainSection'
import { gql, useQuery } from '@apollo/client'
import { Todos, VisiblityFilter } from '../cache'
import { completeAllTodos } from '../operations/completeAllTodos'
import { setVisibilityFilter } from '../operations/setVisibilityFilter'
import { clearCompletedTodos } from '../operations/clearCompletedTodos'

export const GET_ALL_TODOS = gql`
  query GetAllTodos {
    todos {
      id @client 
      text @client 
      completed @client
    }
  }
`

export const GET_VISIBILITY_FILTER = gql`
  query GetVisibilityFilter {
    visibilityFilter {
      id @client
      displayName @client
    }
  }
`

export default function Main () {
  const todosQueryResult = useQuery(GET_ALL_TODOS);
  const visibilityFilterQueryResult = useQuery(GET_VISIBILITY_FILTER);
  const todos: Todos = todosQueryResult.data.todos;
  const visibilityFilter: VisiblityFilter = visibilityFilterQueryResult.data.visibilityFilter;

  return (
    <MainSection
      activeVisibilityFilter={visibilityFilter}
      todosCount={todos.length}
      completedCount={todos.filter(t => t.completed).length}
      actions={{
        completeAllTodos,
        setVisibilityFilter,
        clearCompleted: clearCompletedTodos
      }}
    />
  );
};

