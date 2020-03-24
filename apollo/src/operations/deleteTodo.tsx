import { todosVar } from "../cache"
import { Todo } from "../models/Todos";

export const deleteTodo = (id: number) => {
  const allTodos = todosVar();
  todosVar(allTodos.filter((todo: Todo) => todo.id !== id));
}