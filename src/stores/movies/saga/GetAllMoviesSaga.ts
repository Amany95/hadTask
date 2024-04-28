// Imports: Dependencies
import {takeLatest, put} from 'redux-saga/effects';
import {
  getAllMoviesListResponseLoading,
  getMoviesListResponseLoading,
  getMoviesListResponseSuccess,
} from '../actions';
import {IMoviesListPayloadType} from '../interfaces/Interfaces';
import MoviesApi from '../apis';

export function* GetAllMoviesSaga({
  payload,
}: {
  payload: IMoviesListPayloadType;
}) {
  let {data, onSuccess, onError} = payload;
  try {
    yield put(getAllMoviesListResponseLoading());
    let result = yield MoviesApi.getMoviesList(data);
    onSuccess(result?.data);
  } catch (error: {}) {
    onError('Something went wong');
  }
}
export function* watchGetAllMoviesSaga() {
  yield takeLatest('GET_ALL_MOVIES_REQUEST', GetAllMoviesSaga);
}
