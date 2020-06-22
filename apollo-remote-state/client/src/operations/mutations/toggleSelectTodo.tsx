
import { ReactiveVar } from "@apollo/client";

export default function createToggleSelectTodo (selectedTodosVar: ReactiveVar<number[]>) {  
  return (todoId: number) => {
    const allSelectedTodos = selectedTodosVar();
    const found = !!allSelectedTodos.find((t) => t === todoId);

    if (found) {
      selectedTodosVar(allSelectedTodos.filter((t) => t === todoId))
    } else {
      selectedTodosVar(allSelectedTodos.concat(todoId))
    }
  };
}