// Imports: Dependencies
import {takeLatest, put} from 'redux-saga/effects';
import {
  getGenreMoviesListResponseLoading,
  getGenreMoviesListResponseSuccess,
} from '../actions';
import {IGenreMoviesListPayloadType} from '../interfaces/Interfaces';
import MoviesApi from '../apis';

export function* GetTypesListSaga({
  payload,
}: {
  payload: IGenreMoviesListPayloadType;
}) {
  let {onSuccess, onError} = payload;
  console.log('first********************s ************************************')

  try {
    yield put(getGenreMoviesListResponseLoading());
    let result = yield MoviesApi.getGenreMoviesList();
    console.log('gere ************************************')
    yield put(getGenreMoviesListResponseSuccess({data: result.data}));
    onSuccess(result?.data);
  } catch (error: {}) {
    console.log('gere  err************************************')

    onError('Something went wong');
  }
}
export function* watchGetTypesListSaga() {
  yield takeLatest('GET_GENRE_MOVIES_REQUEST', GetTypesListSaga);
}
