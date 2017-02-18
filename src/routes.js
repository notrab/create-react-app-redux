import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { history } from './store'
import App from './containers/app'
import Home from './containers/home'
import About from './containers/about'

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/about-us" component={About} />
    </Route>
  </Router>
)

export default Routes
