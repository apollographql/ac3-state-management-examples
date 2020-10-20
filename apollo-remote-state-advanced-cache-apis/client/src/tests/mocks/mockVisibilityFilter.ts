
import { createMockReactiveVar } from "../createMockReactiveVar";
import { VisibilityFilter, VisibilityFilters } from "../../models/VisibilityFilter";

export const mockVisibilityFilter = createMockReactiveVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL
);
