import { produce } from "immer";
import { AnyAction } from "redux";
import {} from "./../actions";
import { Show } from "../model/Show";
import {
  SHOWS_LOADED,
  SHOWS_QUERY_CHANGE,
  SHOW_DETAIL_LOADED,
} from "../actions/Shows";
import { normalize, schema } from "normalizr";

export type State = {
  shows: { [showId: number]: Show };
  query_shows: { [query: string]: number[] };
  query: string;
  loading: boolean;
  show_loading: { [show: number]: boolean };
};

export const initialState: State = {
  shows: {},
  query_shows: {},
  query: "",
  loading: false,
  show_loading: {},
};

function ShowReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];

        const showSchema = new schema.Entity("shows");
        const normalizedData = normalize(shows, [showSchema]);
        draft.loading = false;
        draft.query_shows[draft.query] = normalizedData.result;
        draft.shows = {
          ...draft.shows,
          ...(normalizedData.entities.shows || {}),
        };
      });

    case SHOWS_QUERY_CHANGE:
      return produce(state, (draft) => {
        draft.query = action.payload;
        draft.loading = true;
      });
    case SHOW_DETAIL_LOADED:
      return produce(state, (draft) => {
        const show = action.payload as Show;
        draft.shows[show.id] = show;
      });
    default:
      return state;
  }
}
export default ShowReducer;
