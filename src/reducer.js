/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import countReducer from 'containers/Home/reducer';
import todoReducer from 'containers/Todo/reducer';

export default combineReducers({
  router: connectRouter(history),
  countReducer,
  todoReducer
})
