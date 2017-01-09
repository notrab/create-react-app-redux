import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import Home from './containers/home'
import About from './containers/about'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about-us" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root')
)
