import {combineReducers} from 'redux';
import MoviesListReducer from './MoviesListReducer';
import TypesListReducer from './TypesListReducer';

// Redux: Root Reducer
const MoviesReducer = combineReducers({
  moviesList: MoviesListReducer,
  typesList: TypesListReducer,

});
// Exports
export default MoviesReducer;
