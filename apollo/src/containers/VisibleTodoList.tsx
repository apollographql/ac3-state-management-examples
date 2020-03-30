
import React from 'react'
import { visibilityFilterVar } from '../cache'
import TodoList from '../components/TodoList';
import { VisiblityFilter, VisibilityFilters } from '../models/VisibilityFilter';
import { Todos } from '../models/Todos';
import { useQuery } from '@apollo/client';
import { GetAllTodos } from '../operations/__generated__/GetAllTodos';
import { GET_ALL_TODOS } from '../operations/queries/getAllTodos';
import { useCompleteTodo } from '../operations/mutations/completeTodo';

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
  // const { completeTodo, deleteTodo, editTodo } = useTodos();
  const { mutate: completeTodo } = useCompleteTodo();
  const { loading: isTodosLoading, data: todosConnection, error: todosError } = useQuery<GetAllTodos>(GET_ALL_TODOS);

  if (isTodosLoading) return <div>Loading...</div>
  if (todosError) return <div>An error occurred {JSON.stringify(todosError)}</div>
  if (!todosConnection) return <div>None</div>;

  const todos: Todos = todosConnection.todos.edges.map((t) => t?.node) as Todos;
  const filteredTodos = filterTodosByVisibility(visibilityFilterVar(), todos);

  return <TodoList 
    filteredTodos={filteredTodos} 
    actions={{
      completeTodo: (id: number) => completeTodo({ variables: { id }}),
      deleteTodo: () => {},
      editTodo: () => {},
    }}/>;
}
