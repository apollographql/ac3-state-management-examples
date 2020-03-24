
import { visibilityFilterVar } from "../cache";
import { VisiblityFilter } from "../models/VisibilityFilter";

export const setVisibilityFilter = (filter: VisiblityFilter) => {

  visibilityFilterVar(filter);
}