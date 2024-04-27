import {combineReducers} from 'redux';
import MoviesListReducer from './MoviesListReducer';

// Redux: Root Reducer
const MoviesReducer = combineReducers({
  moviesList: MoviesListReducer,
});
// Exports
export default MoviesReducer;
