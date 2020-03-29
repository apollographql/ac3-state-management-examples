
import React from 'react'
import MainSection from '../components/MainSection'
import { useQuery } from '@apollo/client'
import { VisiblityFilter } from '../models/VisibilityFilter'
import { useTodos } from '../hooks'
import { GET_ALL_TODOS } from '../queries/getAllTodos'
import { GET_VISIBILITY_FILTER } from '../queries/getVisibilityFilter'
import { GetAllTodos } from '../queries/__generated__/GetAllTodos'

export default function Main () {
  const { loading: isTodosLoading, data: todosConnection, error: todosError } = useQuery<GetAllTodos>(GET_ALL_TODOS);
  const { data: visibilityFilter } = useQuery<VisiblityFilter>(GET_VISIBILITY_FILTER);
  const { setVisibilityFilter } = useTodos();

  if (isTodosLoading) return <div>Loading...</div>
  if (todosError) return <div>An error occurred {JSON.stringify(todosError)}</div>
  if (!todosConnection) return <div>None</div>;

  const todos = todosConnection.todos.edges.map((t) => t?.node)
  
  return (
    <MainSection
      activeVisibilityFilter={visibilityFilter as VisiblityFilter}
      todosCount={todosConnection.todos.edges.length}
      completedCount={todos.filter(t => t ? t.completed : false).length}
      actions={{
        completeAllTodos: () => {},
        setVisibilityFilter,
        clearCompletedTodos: () => {},
      }}
    />
  );
};

