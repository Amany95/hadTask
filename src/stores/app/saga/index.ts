// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import {MoviesSaga} from '../../movies/saga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(MoviesSaga)]);
}
