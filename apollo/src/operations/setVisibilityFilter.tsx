
import { client } from "..";
import { visibilityFilterVar } from "../cache";
import { VisiblityFilter } from "../models/VisibilityFilter";

export const setVisibilityFilter = (filter: VisiblityFilter) => {

  visibilityFilterVar(filter);

  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}