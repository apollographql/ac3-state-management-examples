
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_TODO_BY_ID } from '../operations/queries/getTodoById';
import { GetTodoById } from '../operations/queries/__generated__/GetTodoById';
import TodoItem from '../components/TodoItem'
import { useCompleteTodo } from '../operations/mutations/completeTodo';
import { useDeleteTodo } from '../operations/mutations/deleteTodo';
import { useEditTodo } from '../operations/mutations/editTodo';

export function TodoDetails() {
  let { id } = useParams();
  const { mutate: completeTodo } = useCompleteTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: editTodo } = useEditTodo();

  const { loading, data, error } = useQuery<GetTodoById>(GET_TODO_BY_ID, { variables: { id: Number(id) }})

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  const actions = {
    completeTodo: (id: number) => completeTodo({ variables: { id }}),
    deleteTodo: (id: number) => deleteTodo({ variables: { id }}),
    editTodo: (id: number, text: string) => editTodo({ variables: { id, text }}),
  }

  return data?.todo.__typename === "Todo" ? (
    <ul className="todo-list">
      <TodoItem todo={data?.todo} {...actions} />
    </ul>
  ) : (
    <div>Todo not found</div>
  )
}
