import { call, put } from "redux-saga/effects";
import { loadShowDetail, searchShows } from "../api";
import { Action } from "../actions";
import { showDetailLoadedAction, showsLoadedAction } from "../actions/Shows";

export function* fetchShows(action: Action): Generator<any, any, any> {
  const showsAndCast = yield call(searchShows, action.payload);
  const shows = showsAndCast.map((item: any) => item.show);
  yield put(showsLoadedAction(shows));
}
export function* fetchShowDetails(action: Action): Generator<any, any, any> {
  const shows = yield call(loadShowDetail, action.payload);
  yield put(showDetailLoadedAction(shows));
}
