
import React from 'react'
import MainSection from '../components/MainSection'
import { useQuery } from '@apollo/client'
import { VisiblityFilter } from '../models/VisibilityFilter'
import { Todos } from '../models/Todos'
import { GET_ALL_TODOS } from '../operations/queries/getAllTodos'
import { GET_VISIBILITY_FILTER } from '../operations/queries/getVisibilityFilter'
import { todoMutations } from '../operations/mutations'

export default function Main () {
  const todosQueryResult = useQuery(GET_ALL_TODOS);
  const visibilityFilterQueryResult = useQuery(GET_VISIBILITY_FILTER);
  const todos: Todos = todosQueryResult.data.todos;
  const visibilityFilter: VisiblityFilter = visibilityFilterQueryResult.data.visibilityFilter;
  const { completeAllTodos, setVisibilityFilter, clearCompletedTodos } = todoMutations;

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

