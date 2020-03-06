
import React from 'react'
import MainSection from '../components/MainSection'
import { gql, useQuery } from '@apollo/client'
import { completeAllTodos } from '../operations/completeAllTodos'
import { setVisibilityFilter } from '../operations/setVisibilityFilter'
import { clearCompletedTodos } from '../operations/clearCompletedTodos'
import { VisiblityFilter } from '../models/VisibilityFilter'
import { Todos } from '../models/Todos'

/** 
 * We **could** use the todosVar and the
 * visibilityFilterVar to get access to these values as well,
 * but it would return everything.
 * 
 * Instead, stick to using queries in order to fetch 
 * specific data.
 * 
 * If we want to fetch by id, we can make those queries and
 * resolve them properly using the "existing" and "incoming"
 * arguments in the read function on the type policy.
 */

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
  const todosQueryResult = useQuery(GET_ALL_TODOS, { variables: { name: 'hi' } });
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

