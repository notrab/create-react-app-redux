import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { incrementAsync, decrementAsync } from '../../modules/counter'

class Home extends Component {
  render() {
    const { count, incrementAsync, decrementAsync, isIncrementing, isDecrementing, changePage } = this.props

    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <p>Count: {count}</p>
        <p><button onClick={incrementAsync} disabled={isIncrementing}>Increment Async</button> <button onClick={decrementAsync} disabled={isDecrementing}>Decrement Async</button></p>
        <button onClick={() => changePage()}>Go to about page via redux</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementAsync,
  decrementAsync,
  changePage: () => {
    dispatch(push('/about-us'))
  }
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
