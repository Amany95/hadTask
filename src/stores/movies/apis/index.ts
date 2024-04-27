import axiosInterceptorInstance from '../../../services/axiosInterceptorInstance';
import {
  IGenreMoviesListResponse,
  IMoviesListRequest,
  IMoviesListResponse,
} from '../interfaces/Interfaces';

interface IMoviesApi {
  getMoviesList: (data: IMoviesListRequest) => Promise<IMoviesListResponse>;
  getGenreMoviesList: () => Promise<IGenreMoviesListResponse>;
}

const MoviesApi: IMoviesApi = {
  getMoviesList: async data => {
    let {page} = data;
    return await axiosInterceptorInstance.get(
      `discover/movie?sort_by=popularity.desc&page=${page}`,
    );
  },
  getGenreMoviesList: async () => {
    return await axiosInterceptorInstance.get('genre/movie/list');
  },
};

export default MoviesApi;
