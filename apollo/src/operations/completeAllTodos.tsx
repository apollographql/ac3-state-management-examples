import { todosVar, Todo } from "../cache"
import { client } from "..";

export const completeAllTodos = () => {
  const allTodosCompleted = todosVar().map((t: Todo) => ({ ...t, completed: true }));
  todosVar(allTodosCompleted);

  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}