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

export const showsSelector = createSelector(showsMapSelector, (showMap) =>
  Object.keys(showMap).map((showId) => showMap[+showId])
);
