
import { Todo } from "../../../generated/graphql";

export interface TodoRepo {
  addTodo(text: string): Promise<void>;
  completeTodo (id: number): Promise<void>;
  clearCompletedTodos(): Promise<void>;
  deleteTodo(id: number): Promise<void>;
  editTodo(id: number, text: string): Promise<void>;
  getAllTodos (): Promise<Todo[]>;
  getTodoById (id: number): Promise<Todo>;
}
