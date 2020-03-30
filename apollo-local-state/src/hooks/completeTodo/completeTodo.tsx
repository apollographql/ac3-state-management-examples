
import { ReactiveVar } from "@apollo/client";
import { Todos } from "../../models/Todos";

export default function createCompleteTodo (
  todosVar: ReactiveVar<Todos>
) {
  return (id: number) => {
    const allTodos = todosVar(); 
  
    todosVar(allTodos.map((t) => t.id === id ? { ...t, completed: true } : t));
  }
}
