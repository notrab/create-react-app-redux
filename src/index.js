import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import Home from './containers/home'
import About from './containers/about'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </App>
    </ConnectedRouter>
  </Provider>,
  target
)
