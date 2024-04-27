// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import MoviesReducer from '../../movies/reducers';

// Redux: Root Reducer
const rootReducer = combineReducers({
  MoviesReducer,
});
// Exports
export default rootReducer;
