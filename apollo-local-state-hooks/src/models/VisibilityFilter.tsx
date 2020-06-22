import { Todos } from "./Todos";

export type VisiblityFilter = {
  id: string;
  displayName: string;
}

export const VisibilityFilters: { [filter: string]: VisiblityFilter } = {
  SHOW_ALL: {
    id: "show_all",
    displayName: "All"
  },
  SHOW_COMPLETED: {
    id: "show_completed",
    displayName: "Completed"
  },
  SHOW_ACTIVE: {
    id: "show_active",
    displayName: "Active"
  }
}

export function filterTodosByVisibility(visibilityFilter: VisiblityFilter, todos: Todos) {
  switch (visibilityFilter.id) {
    case VisibilityFilters.SHOW_ALL.id:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED.id:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE.id:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + visibilityFilter);
  }
}