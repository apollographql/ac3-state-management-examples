
import { client } from ".."
import { todosVar } from "../cache"
import { Todo } from "../models/Todos";

export const editTodo = (id: number, text: string) => {
  let todosWithEditedTodo = todosVar()
    .map((todo: Todo) => todo.id === id ? { ...todo, text } : todo);
  
  todosVar(todosWithEditedTodo);

  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}