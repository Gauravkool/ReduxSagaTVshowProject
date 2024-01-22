import { applyMiddleware, combineReducers, createStore } from "redux";
import ShowReducer from "./reducers/Shows";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { debounce, takeEvery } from "redux-saga/effects";
import { LOAD_SHOW_ACTION, SHOWS_QUERY_CHANGE } from "./actions/Shows";
import { fetchShowDetails, fetchShows } from "./sagas/Shows";

function* rootSaga() {
  yield debounce(500, SHOWS_QUERY_CHANGE, fetchShows);
  yield takeEvery(LOAD_SHOW_ACTION, fetchShowDetails);
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
