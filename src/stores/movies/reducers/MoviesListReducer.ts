import {
  GET_MOVIES_LOADING,
  GET_MOVIES_REQUEST,
  GET_MOVIES_RESPONSE_FAILED,
  GET_MOVIES_RESPONSE_SUCCESS,
} from '../actions/Types';
import {IActionReducer, IMoviesListState} from '../interfaces/Interfaces';

const initialState = {
  data: [],
  loading: false,
  
};
const MoviesListReducer = (
  state: IMoviesListState = initialState,
  action: IActionReducer,
) => {
  switch (action.type) {
    case GET_MOVIES_LOADING:
    case GET_MOVIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_MOVIES_RESPONSE_SUCCESS: {
      let {data} = action.payload;
      return {
        ...state,
        loading: false,
        data: data,
      };
    }
    case GET_MOVIES_RESPONSE_FAILED: {
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
export default MoviesListReducer;
