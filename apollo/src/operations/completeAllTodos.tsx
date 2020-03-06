import { todosVar } from "../cache"
import { client } from "..";
import { Todo } from "../models/Todos";

export const completeAllTodos = () => {
  const allTodosCompleted = todosVar().map((t: Todo) => ({ ...t, completed: true }));
  todosVar(allTodosCompleted);

  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}