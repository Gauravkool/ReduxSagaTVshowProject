import { ActionCreator } from ".";
import { Show } from "../model/Show";

// export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED";

// export const showDetailLoadedAction: ActionCreator<Show> = (show: Show) => ({
//   type: SHOW_DETAIL_LOADED,
//   payload: show,
// });

export const LOAD_SHOW_ACTION = "LOAD_SHOW_ACTION";

export const loadShowAction: ActionCreator<number> = (showId:number) => ({
  type: LOAD_SHOW_ACTION,
  payload: showId,
});