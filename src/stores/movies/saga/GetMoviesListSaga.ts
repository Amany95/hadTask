// Imports: Dependencies
import {takeLatest, put} from 'redux-saga/effects';
import {
  getMoviesListResponseLoading,
  getMoviesListResponseSuccess,
} from '../actions';
import {IMoviesListPayloadType} from '../interfaces/Interfaces';
import MoviesApi from '../apis';

export function* GetMoviesListSaga({
  payload,
}: {
  payload: IMoviesListPayloadType;
}) {
  let {data, onSuccess, onError} = payload;
  try {
    yield put(getMoviesListResponseLoading());
    let result = yield MoviesApi.getMoviesList(data);
    yield put(getMoviesListResponseSuccess({data: result.data}));
    onSuccess(result?.data);
  } catch (error: {}) {
    onError('Something went wong');
  }
}
export function* watchGetMoviesListSaga() {
  yield takeLatest('GET_MOVIES_REQUEST', GetMoviesListSaga);
}
