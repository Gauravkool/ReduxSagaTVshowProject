import { applyMiddleware, combineReducers, createStore } from "redux";
import ShowReducer from "./reducers/Shows";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { SHOWS_QUERY_CHANGE } from "./actions/Shows";
import { fetchShows } from "./sagas/Shows";

function* rootSaga() {
  yield takeLatest(SHOWS_QUERY_CHANGE, fetchShows);
}

const reducer = combineReducers({ shows: ShowReducer });
export type State = ReturnType<typeof reducer>;
const sagaMiddelware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddelware))
);
sagaMiddelware.run(rootSaga);

export default store;
