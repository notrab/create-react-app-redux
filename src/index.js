import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import Routes from './routes'

import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  target
)
