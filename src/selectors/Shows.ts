import { createSelector } from "reselect";
import { State } from "../store";

export const showsStateSelector = (state: State) => state.shows;

export const showsQuerySelector = createSelector(
  showsStateSelector,
  (showState) => showState.query
);

export const showsMapSelector = createSelector(
  showsStateSelector,
  (showState) => showState.shows
);

export const queryShowsMapSelector = createSelector(
  showsStateSelector,
  (showState) => showState.query_shows
);

export const showLoadingSelector = createSelector(
  showsStateSelector,
  (showState) => showState.loading
);
export const showsSelector = createSelector(
  showsMapSelector,
  showsQuerySelector,
  queryShowsMapSelector,
  (showMap, query, queryShowsMap) =>
    queryShowsMap[query]?.map((showId) => showMap[+showId])
);
