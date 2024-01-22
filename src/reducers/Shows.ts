import { AnyAction } from "redux";
import {} from "./../actions";
import { Show } from "../model/Show";


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
   
    default:
      return state;
  }
}
export default ShowReducer;
