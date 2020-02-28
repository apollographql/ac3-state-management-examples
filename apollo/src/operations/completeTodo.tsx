
import { todosVar } from "../cache"
import { client } from "..";

export const completeTodo = (id: number) => {
  const allTodos = todosVar();
  todosVar(allTodos.filter((t) => t.id !== id));
  
  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}