import { todosVar, Todo } from "../cache"
import { client } from "..";

export const deleteTodo = (id: number) => {
  const allTodos = todosVar();
  todosVar(allTodos.filter((todo: Todo) => todo.id !== id));
  
  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}