import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

interface HeaderProps {
  addTodo: (text: string) => void;
}

const Header = ({ addTodo }: HeaderProps) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text: string) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
