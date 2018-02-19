import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducers from './reducers';

export default(initialState) => {
  return createStore(
    rootReducers,
    applyMiddleware(logger, thunkMiddleware)
  );
}
