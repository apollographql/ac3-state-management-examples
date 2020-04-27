
import React from 'react';
import Header from '../components/Header'
import { todoMutations } from '../operations/mutations';

export default function () {
  return <Header addTodo={todoMutations.addTodo} />;
}