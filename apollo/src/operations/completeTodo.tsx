
import { todosVar } from "../cache"
import { client } from "..";

export const completeTodo = (id: number) => {
  const allTodos = todosVar();

  todosVar(allTodos.map((t) => t.id === id ? { ...t, completed: true } : t));
  
  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}