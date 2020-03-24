import { todosVar } from "../cache"

export const clearCompletedTodos = () => {

  const nonCompletedTodos = todosVar().filter((t) => t.completed !== true);
  
  todosVar(nonCompletedTodos);

}