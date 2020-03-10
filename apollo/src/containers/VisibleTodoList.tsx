
import React from 'react'
import TodoList from '../components/TodoList';
import { completeTodo } from '../operations/completeTodo';
import { deleteTodo } from '../operations/deleteTodo';
import { editTodo } from '../operations/editTodo';
import { VisiblityFilter, VisibilityFilters } from '../models/VisibilityFilter';
import { Todos } from '../models/Todos';

function filterTodosByVisibility(visibilityFilter: VisiblityFilter, todos: Todos) {
  switch (visibilityFilter.id) {
    case VisibilityFilters.SHOW_ALL.id:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED.id:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE.id:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + visibilityFilter);
  }
}

export default function VisibleTodoList () {
  const filteredTodos: Todos = [];

  return <TodoList 
    filteredTodos={filteredTodos} 
    actions={{
      completeTodo,
      deleteTodo,
      editTodo
    }}/>;
}
