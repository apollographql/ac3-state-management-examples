import { client } from "..";
import { VisiblityFilter, visibilityFilterVar } from "../cache";

export const setVisibilityFilter = (filter: VisiblityFilter) => {

  visibilityFilterVar(filter);

  // TODO: Remove this
  (client as any).queryManager.broadcastQueries();
}