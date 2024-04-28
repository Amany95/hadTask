import {
  GET_GENRE_MOVIES_LOADING,
  GET_GENRE_MOVIES_REQUEST,
  GET_GENRE_MOVIES_RESPONSE_FAILED,
  GET_GENRE_MOVIES_RESPONSE_SUCCESS,
} from '../actions/Types';
import {IActionReducer, IGenreMoviesListState} from '../interfaces/Interfaces';

const initialState = {
  data: [],
  loading: false,
};
const TypesListReducer = (
  state: IGenreMoviesListState = initialState,
  action: IActionReducer,
) => {
  switch (action.type) {
    case GET_GENRE_MOVIES_LOADING:
    case GET_GENRE_MOVIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_GENRE_MOVIES_RESPONSE_SUCCESS: {
      let {data} = action.payload;
      return {
        ...state,
        loading: false,
        data: data,
      };
    }
    case GET_GENRE_MOVIES_RESPONSE_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
// Exports
export default TypesListReducer;
