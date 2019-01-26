import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import history from 'utils/history';
import rootReducer from './reducer';

// Create logger for Redux
const logger = createLogger({
  // Check options at https://github.com/LogRocket/redux-logger#options
  collapsed: true
});

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history), logger]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;
