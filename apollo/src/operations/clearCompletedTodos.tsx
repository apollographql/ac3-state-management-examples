import { todosVar } from "../cache"
import { client } from "..";

export const clearCompletedTodos = () => {

  const nonCompletedTodos = todosVar().filter((t) => t.completed !== true);
  
  todosVar(nonCompletedTodos);

  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}