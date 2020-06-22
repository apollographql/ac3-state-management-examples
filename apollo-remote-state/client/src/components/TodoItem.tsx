import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import viewIcon from '../assets/icons/view.svg'
import {
  Link
} from "react-router-dom";

type Props = any;

export default class TodoItem extends Component<Props, Props> {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo, toggleSelectedTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text: string) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view flex-center">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => {
                  completeTodo(todo.id)
                 }} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <div className="view-icon"><Link to={`/todo/${todo.id}`}><img src={viewIcon}/></Link></div>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li onClick={() => toggleSelectedTodo ? toggleSelectedTodo(todo.id) : ''} className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
