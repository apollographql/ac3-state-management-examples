import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { Todo } from '../models/Todos'

const TodoList = ({ filteredTodos, actions }: any) => (
  <ul className="todo-list">
    {filteredTodos.map((todo: Todo) =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </ul>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList
