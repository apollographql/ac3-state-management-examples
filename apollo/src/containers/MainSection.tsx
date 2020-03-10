
import React from 'react'
import MainSection from '../components/MainSection'
import { gql, useQuery } from '@apollo/client'
import { completeAllTodos } from '../operations/completeAllTodos'
import { setVisibilityFilter } from '../operations/setVisibilityFilter'
import { clearCompletedTodos } from '../operations/clearCompletedTodos'
import { VisiblityFilter, VisibilityFilters } from '../models/VisibilityFilter'
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

// TODO: Write GET_ALL_TODOS

// TODO: Write GET_VISIBILITY_FILTER

export default function Main () {

  // TODO: Get all todos using query
  const todos: Todos = [];

  // TODO: Get current visibility filter using query
  const visibilityFilter: VisiblityFilter = VisibilityFilters.SHOW_ALL;

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

