// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
import {watchGetMoviesListSaga} from './GetMoviesListSaga';

// Redux Saga: Root Saga
export function* MoviesSaga() {
  yield all([fork(watchGetMoviesListSaga)]);
}