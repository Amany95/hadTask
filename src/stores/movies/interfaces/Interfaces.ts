// *************************************** Action **********************************************
export interface IActionReducer {
  type: any;
  payload?: any;
}

// *********** Movies list ********************
export interface IMoviesListState {
  loading: boolean;
  data: IMoviesListResponse[];
}
export interface IMoviesListPayloadType {
  data: IMoviesListRequest;
  onSuccess: (result: IMoviesListResponse) => void;
  onError: (result: string) => void;
}

export interface IMoviesListRequest {
  page: number;
}
export interface IMoviesResultsRequest {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface IMoviesListResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMoviesResultsRequest[];
}

// *********** Genre Movies list ********************
export interface IGenreMoviesListState {
  loading: boolean;
  data: IGenreMoviesListResponse[];
}
export interface IGenreMoviesListPayloadType {
  onSuccess: (result: IGenreMoviesListResponse) => void;
  onError: (result: string) => void;
}

export interface IGenreMoviesListResponse {
  genres: {
    id: number;
    name: string;
  }[];
}
