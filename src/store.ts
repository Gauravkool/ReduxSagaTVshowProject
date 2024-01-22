import createSagaMiddleware from "redux-saga";

import { debounce, takeEvery } from "redux-saga/effects";
import { LOAD_SHOW_ACTION } from "./actions/Shows";
import { fetchShowDetails, fetchShows } from "./sagas/Shows";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import ShowsReducer, { showsQueryChangeAction } from "./slices/Shows";

function* rootSaga() {
  yield debounce(500, showsQueryChangeAction, fetchShows);
  yield takeEvery(LOAD_SHOW_ACTION, fetchShowDetails);
}

const sagaMiddelware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shows: ShowsReducer,
  },
  middleware:()=> new Tuple(sagaMiddelware),
});

sagaMiddelware.run(rootSaga);

export type State = ReturnType<typeof store.getState>;

export default store;
