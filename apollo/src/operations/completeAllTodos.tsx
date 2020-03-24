import { todosVar } from "../cache"
import { Todo } from "../models/Todos";

export const completeAllTodos = () => {
  const allTodosCompleted = todosVar().map((t: Todo) => ({ ...t, completed: true }));
  todosVar(allTodosCompleted);
}