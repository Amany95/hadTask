// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from './reducers';

// Imports: Redux Root Saga
import {rootSaga} from './saga';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Define middleware array
const middleware = [sagaMiddleware];

// Check if in development mode
if (process.env.NODE_ENV === 'development') {
  // Add Redux Logger middleware
  const loggerMiddleware = createLogger();
  middleware.push(loggerMiddleware);
}
// Redux: Store

const store = createStore(rootReducer, applyMiddleware(...middleware));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
