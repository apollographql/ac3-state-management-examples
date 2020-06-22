
import { Todos, Todo } from "../models/Todos";
import { ReactiveVar } from "@apollo/client";
import { VisiblityFilter } from "../models/VisibilityFilter";

export function useTodos (
  todosVar: ReactiveVar<Todos>, 
  visibilityFilterVar: ReactiveVar<VisiblityFilter>
) {
  
  const addTodo = (text: string) => {
    const createNewTodoId = (allTodos: Todos) => {
      return allTodos.reduce(
          (maxId: number, todo: Todo) => Math.max(todo.id, maxId),
          -1
        ) + 1;
    }
    
    const createNewTodo = (text: string, allTodos: Todos) => {
      return { text, completed: false, id: createNewTodoId(allTodos) }
    }

    const allTodos = todosVar();
    todosVar(allTodos.concat([createNewTodo(text, allTodos)]));
  }

  const clearCompletedTodos = () => {
    const nonCompletedTodos = todosVar()
      .filter((t) => t.completed !== true);
  
    todosVar(nonCompletedTodos);
  }

  const completeAllTodos = () => {
    const allTodosCompleted = todosVar()
    .map((t: Todo) => ({ ...t, completed: true }));
    
    todosVar(allTodosCompleted);
  }

  const completeTodo = (id: number) => {
    const allTodos = todosVar(); 
  
    todosVar(allTodos.map((t) => t.id === id ? { ...t, completed: true } : t));
  }

  const deleteTodo = (id: number) => {
    const allTodos = todosVar();
    const filteredTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    todosVar(filteredTodos);
  }

  const editTodo = (id: number, text: string) => {
    let todosWithEditedTodo = todosVar()
      .map((todo: Todo) => todo.id === id ? { ...todo, text } : todo);
    
    todosVar(todosWithEditedTodo);
  }

  const setVisibilityFilter = (filter: VisiblityFilter) => {
    visibilityFilterVar(filter);
  }

  return {
    operations: { 
      addTodo, 
      clearCompletedTodos, 
      completeTodo, 
      completeAllTodos, 
      deleteTodo, 
      editTodo,
      setVisibilityFilter
    }
  }
  
}