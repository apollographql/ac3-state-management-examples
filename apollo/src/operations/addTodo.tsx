
import { todosVar } from "../cache";
import { client } from "..";
import { Todos, Todo } from "../models/Todos";

const createNewTodoId = (allTodos: Todos) => {
  return allTodos.reduce(
      (maxId: number, todo: Todo) => Math.max(todo.id, maxId),
      -1
    ) + 1;
}

const createNewTodo = (text: string, allTodos: Todos) => {
  return { text, completed: false, id: createNewTodoId(allTodos) }
}

export const addTodo = (text: string) => {
  const allTodos = todosVar();
  
  todosVar(allTodos.concat([createNewTodo(text, allTodos)]));

  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
};