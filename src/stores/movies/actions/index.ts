import {
  IGenreMoviesListPayloadType,
  IGenreMoviesListResponse,
  IMoviesListPayloadType,
  IMoviesListResponse,
} from '../interfaces/Interfaces';
import {
  GET_GENRE_MOVIES_LOADING,
  GET_GENRE_MOVIES_REQUEST,
  GET_GENRE_MOVIES_RESPONSE_FAILED,
  GET_GENRE_MOVIES_RESPONSE_SUCCESS,
  GET_MOVIES_LOADING,
  GET_MOVIES_REQUEST,
  GET_MOVIES_RESPONSE_FAILED,
  GET_MOVIES_RESPONSE_SUCCESS,
} from './Types';

// **************************** Get Movies list *************************
export const getMoviesListRequest = (data: IMoviesListPayloadType) => {
  return {type: GET_MOVIES_REQUEST, payload: data};
};
export const getMoviesListResponseLoading = () => {
  return {type: GET_MOVIES_LOADING};
};
export const getMoviesListResponseFailed = () => {
  return {type: GET_MOVIES_RESPONSE_FAILED};
};
export const getMoviesListResponseSuccess = (data: IMoviesListResponse) => {
  return {type: GET_MOVIES_RESPONSE_SUCCESS, payload: data};
};

// **************************** Get Genre Movies list *************************
export const getGenreMoviesListRequest = (
  data: IGenreMoviesListPayloadType,
) => {
  return {type: GET_GENRE_MOVIES_REQUEST, payload: data};
};
export const getGenreMoviesListResponseLoading = () => {
  return {type: GET_GENRE_MOVIES_LOADING};
};
export const getGenreMoviesListResponseFailed = () => {
  return {type: GET_GENRE_MOVIES_RESPONSE_FAILED};
};
export const getGenreMoviesListResponseSuccess = (
  data: IGenreMoviesListResponse,
) => {
  return {type: GET_GENRE_MOVIES_RESPONSE_SUCCESS, payload: data};
};
