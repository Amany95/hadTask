// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
import {watchGetMoviesListSaga} from './GetMoviesListSaga';
import {watchGetTypesListSaga} from './GetTypesListSaga';
import { watchGetAllMoviesSaga } from './GetAllMoviesSaga';

// Redux Saga: Root Saga
export function* MoviesSaga() {
  yield all([fork(watchGetMoviesListSaga), fork(watchGetTypesListSaga),fork(watchGetAllMoviesSaga)]);
}
