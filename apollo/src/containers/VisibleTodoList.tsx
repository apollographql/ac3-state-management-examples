import React from 'react'
import { visibilityFilterVar, VisiblityFilter, Todos, todosVar } from '../cache'
import { useQuery } from '@apollo/client'
import { GET_ALL_TODOS } from './MainSection';
import TodoList from '../components/TodoList';

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
  const todos = todosVar();
  const filteredTodos = filterTodosByVisibility(visibilityFilterVar(), todos);

  return <TodoList filteredTodos={filteredTodos} actions={{}}/>;
}
