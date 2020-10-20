
export type VisibilityFilter = {
  id: string;
  displayName: string;
}

export const VisibilityFilters: { [filter: string]: VisibilityFilter } = {
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
