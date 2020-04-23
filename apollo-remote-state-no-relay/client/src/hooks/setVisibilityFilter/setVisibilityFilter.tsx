
import { VisiblityFilter } from "../../models/VisibilityFilter";
import { ReactiveVar } from "@apollo/client";

export default (visibilityFilterVar: ReactiveVar<VisiblityFilter>) => {
  return (filter: VisiblityFilter) => {
    visibilityFilterVar(filter);
  }
}