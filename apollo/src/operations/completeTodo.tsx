
import { todosVar } from "../cache"

export const completeTodo = (id: number) => {
  const allTodos = todosVar(); 

  todosVar(allTodos.map((t) => t.id === id ? { ...t, completed: true } : t));
}