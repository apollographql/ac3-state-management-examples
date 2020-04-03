
import React from 'react'
import MainSection from '../components/MainSection'
import { useQuery } from '@apollo/client'
import { VisiblityFilter } from '../models/VisibilityFilter'
import { Todos } from '../models/Todos'
import { useTodos } from '../hooks'
import { GET_ALL_TODOS } from '../queries/getAllTodos'
import { GET_VISIBILITY_FILTER } from '../queries/getVisibilityFilter'

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



export default function Main () {
  const todosQueryResult = useQuery(GET_ALL_TODOS);
  const visibilityFilterQueryResult = useQuery(GET_VISIBILITY_FILTER);
  const todos: Todos = todosQueryResult.data.todos;
  const visibilityFilter: VisiblityFilter = visibilityFilterQueryResult.data.visibilityFilter;
  const { completeAllTodos, setVisibilityFilter, clearCompletedTodos } = useTodos();

  return (
    <MainSection
      activeVisibilityFilter={visibilityFilter}
      todosCount={todos.length}
      completedCount={todos.filter(t => t.completed).length}
      actions={{
        completeAllTodos,
        setVisibilityFilter,
        clearCompletedTodos
      }}
    />
  );
};

