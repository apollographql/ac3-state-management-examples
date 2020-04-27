
import React from 'react';
import Header from '../components/Header'
import { todoOperations } from '../operations/mutations';

export default function () {
  return <Header addTodo={todoOperations.addTodo} />;
}