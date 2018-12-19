import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

import counter from './counter'
import history from '../history'

export default combineReducers({
  router: connectRouter(history),
  counter
})
