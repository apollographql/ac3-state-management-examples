
import React from 'react';
import Header from '../components/Header'
import { todosVar } from '../cache';

export default function () {
  const addTodo = (text: string) => {
    debugger;
    // Handle the id using the way they've done it via redux
    todosVar([{ text, completed: false, id: 1 }]);
  };

  return <Header addTodo={addTodo} />;
}