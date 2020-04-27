
import createAddTodo from "./addTodo/addTodo";
import createClearCompletedTodos from "./clearCompletedTodos/clearCompletedTodos";
import createCompleteTodo from "./completeTodo/completeTodo";
import createCompleteAllTodos from "./completeAllTodos/completeAllTodos";
import createDeleteTodo from "./deleteTodo/deleteTodo";
import createEditTodo from "./editTodo/editTodo";
import createSetVisibilityFilter from "./setVisibilityFilter/setVisibilityFilter";
import { todosVar, visibilityFilterVar } from "../../cache";

export const todoOperations = {
  addTodo: createAddTodo(todosVar),
  clearCompletedTodos: createClearCompletedTodos(todosVar),
  completeTodo: createCompleteTodo(todosVar),
  completeAllTodos: createCompleteAllTodos(todosVar),
  deleteTodo: createDeleteTodo(todosVar),
  editTodo: createEditTodo(todosVar),
  setVisibilityFilter: createSetVisibilityFilter(visibilityFilterVar)
}
