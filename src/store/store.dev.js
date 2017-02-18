import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from '../modules'

const initialState = {}

const middleware = [thunk, routerMiddleware(browserHistory)]
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(...middleware)))
export const history = syncHistoryWithStore(browserHistory, store)

export default store
