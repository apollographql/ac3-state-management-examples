
import React from 'react';
import Header from '../components/Header'
import { addTodo } from '../operations/addTodo';

export default function () {
  return <Header addTodo={addTodo} />;
}