import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Show } from "../model/Show";

const showsAdaptor = createEntityAdapter<Show>();

const initialState = showsAdaptor.getInitialState({
  query_shows: {} as { [query: string]: number[] },
  query: "",
  loading: false,
  show_loading: {} as { [showId: number]: boolean },
});

export type State = typeof initialState;

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    loaded,
    queryChange,
    showDetailLoaded : showsAdaptor.addOne
  },
});

function loaded(state: State, action: PayloadAction<Show[]>) {
  const shows = action.payload;
  state.loading = false;
  state.query_shows[state.query] = shows.map((s)=>s.id);
  showsAdaptor.addMany(state,action)
}

function queryChange(state: State, action: PayloadAction<string>) {
  state.query = action.payload;
  state.loading = true;
}


const { actions, reducer: ShowsReducer } = showsSlice;
export const {
  loaded: showsLoadedAction,
  queryChange: showsQueryChangeAction,
  showDetailLoaded: showDetailLoadedAction
} = actions;

export default ShowsReducer;
