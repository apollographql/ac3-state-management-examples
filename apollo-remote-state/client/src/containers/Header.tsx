
import React from 'react';
import Header from '../components/Header'
import { useAddTodo } from '../operations/mutations/addTodo';

export default function () {
  const { mutate, data, error } = useAddTodo();
  return <Header addTodo={(text) => mutate({ variables: { text } })} />;
}