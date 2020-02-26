import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

type HeaderProps = any;

const Header: HeaderProps = ({ addTodo }: any) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text: String) => {
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
