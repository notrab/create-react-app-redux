import { combineReducers } from 'redux'
import counter from './reducers/counter'
import { connectRouter } from "connected-react-router";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

export default combineReducers({
  counter,
  router: connectRouter(history)
});
