
import React from 'react'
import MainSection from '../components/MainSection'
import { useQuery, gql } from '@apollo/client'
import { VisiblityFilter } from '../models/VisibilityFilter'
import { useTodos } from '../hooks'
import { GET_ALL_TODOS } from '../operations/queries/getAllTodos'
import { GET_VISIBILITY_FILTER } from '../operations/queries/getVisibilityFilter'
import { GetAllTodos } from '../operations/queries/__generated__/GetAllTodos'
import { useClearCompletedTodos } from '../operations/mutations/clearCompletedTodos'
import { useCompleteAllTodos } from '../operations/mutations/completeAllTodos'

export default function Main () {
  const { 
    loading: isTodosLoading, 
    data, 
    error: todosError 
  } = useQuery<GetAllTodos>(GET_ALL_TODOS);
  const { data: visibilityFilter } = useQuery<VisiblityFilter>(GET_VISIBILITY_FILTER);
  const { setVisibilityFilter } = useTodos();
  
  const { mutate: clearCompletedTodos } = useClearCompletedTodos();
  const { mutate: completeAllTodos } = useCompleteAllTodos();

  if (isTodosLoading) return <div>Loading...</div>
  if (todosError) return <div>An error occurred {JSON.stringify(todosError)}</div>
  if (!data) return <div>None</div>;
  
  return (
    <MainSection
      activeVisibilityFilter={visibilityFilter as VisiblityFilter}
      todosCount={data.todos.length}
      completedCount={data.todos.filter(t => t ? t.completed : false).length}
      actions={{
        completeAllTodos,
        setVisibilityFilter,
        clearCompletedTodos,
      }}
    />
  );
};

