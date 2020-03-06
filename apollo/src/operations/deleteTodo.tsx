import { todosVar } from "../cache"
import { client } from "..";
import { Todo } from "../models/Todos";

export const deleteTodo = (id: number) => {
  const allTodos = todosVar();
  todosVar(allTodos.filter((todo: Todo) => todo.id !== id));
  
  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}