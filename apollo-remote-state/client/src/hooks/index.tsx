
import createSetVisibilityFilter from "./setVisibilityFilter/setVisibilityFilter";
import { visibilityFilterVar } from "../cache";

export function useTodos () {
  return {
    setVisibilityFilter: createSetVisibilityFilter(visibilityFilterVar)
  }
}
