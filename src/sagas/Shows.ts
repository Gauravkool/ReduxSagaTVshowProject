import { call, put } from "redux-saga/effects";
import { searchShows } from "../api";
import { Action } from "../actions";
import { showsLoadedAction } from "../actions/Shows";

export function* fetchShows(action: Action): Generator<any, any, any> {
  const shows = yield call(searchShows, action.payload);
  yield put(showsLoadedAction(shows));
}
