
import { Todo, Todos } from "../../models/Todos";
import { ReactiveVar } from "@apollo/client";

export default (todosVar: ReactiveVar<Todos>) => {
  return (id: number) => {
    const allTodos = todosVar();
    todosVar(allTodos.filter((todo: Todo) => todo.id !== id));
  }
}
