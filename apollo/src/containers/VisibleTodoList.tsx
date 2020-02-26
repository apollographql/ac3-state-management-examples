import React from 'react'
import { visibilityFilterVar, VisiblityFilter, Todos } from '../cache'
import { gql, useQuery } from '@apollo/client'

const GET_ALL_TODOS = gql`
  query GetAllTodos {
    todos {
      id
      text
      completed
    }
  }
`;

function filterTodosByVisibility(visibilityFilter: VisiblityFilter, todos: Todos) {
  switch (visibilityFilter) {
    case VisiblityFilter.SHOW_ALL:
      return todos;
    case VisiblityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisiblityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + visibilityFilter);
  }
}

export default function VisibleTodoList () {
  const { data, error } = useQuery(GET_ALL_TODOS);
  const filteredTodos = filterTodosByVisibility(visibilityFilterVar(), data);

  return (
    <div>
      hi
    </div>
  )
}
