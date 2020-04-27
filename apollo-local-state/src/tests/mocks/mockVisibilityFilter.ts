
import { createMockReactiveVar } from "../createMockReactiveVar";
import { VisiblityFilter, VisibilityFilters } from "../../models/VisibilityFilter";

export const mockVisibilityFilter = createMockReactiveVar<VisiblityFilter>(
  VisibilityFilters.SHOW_ALL
);