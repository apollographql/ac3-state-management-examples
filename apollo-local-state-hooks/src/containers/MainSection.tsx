import React from "react";
import MainSection from "../components/MainSection";
import { useQuery } from "@apollo/client";
import {
  VisiblityFilter,
  filterTodosByVisibility,
} from "../models/VisibilityFilter";
import { Todos } from "../models/Todos";
import { GET_ALL_TODOS } from "../operations/queries/getAllTodos";
import { GET_VISIBILITY_FILTER } from "../operations/queries/getVisibilityFilter";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import { visibilityFilterVar, todosVar } from "../cache";
import { useTodos } from "../hooks/useTodos";

export default function Main() {
  const todosQueryResult = useQuery(GET_ALL_TODOS);
  const visibilityFilterQueryResult = useQuery(GET_VISIBILITY_FILTER);
  const todos: Todos = todosQueryResult.data.todos;
  const visibilityFilter: VisiblityFilter =
    visibilityFilterQueryResult.data.visibilityFilter;
    
  const filteredTodos = filterTodosByVisibility(visibilityFilterVar(), todos);
  const { operations } = useTodos(todosVar, visibilityFilterVar);

  return (
    <>
      <Header 
        addTodo={operations.addTodo} />
      <MainSection
        activeVisibilityFilter={visibilityFilter}
        todosCount={todos.length}
        completedCount={todos.filter((t) => t.completed).length}
        actions={{
          completeAllTodos: operations.completeAllTodos,
          setVisibilityFilter: operations.setVisibilityFilter,
          clearCompletedTodos: operations.clearCompletedTodos
        }}
      >
        <TodoList
          filteredTodos={filteredTodos}
          actions={{
            completeTodo: operations.completeTodo,
            deleteTodo: operations.deleteTodo,
            editTodo: operations.editTodo
          }}
        />
      </MainSection>
    </>
  );
}
