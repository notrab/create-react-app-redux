import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../modules/counter'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
    {(props.isIncrementing || props.isDecrementing) && <div>Loading ....</div>}

    <p>
      <button
        onClick={props.increment}
        disabled={props.isDecrementing || props.isIncrementing}>
        Increment
      </button>
      <button
        onClick={props.incrementAsync}
        disabled={props.isDecrementing || props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button
        onClick={props.decrement}
        disabled={props.isDecrementing || props.isIncrementing}>
        Decrement
      </button>
      <button
        onClick={props.decrementAsync}
        disabled={props.isDecrementing || props.isIncrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
