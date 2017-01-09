import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class Home extends Component {
  goToAboutPage = () => {
    this.props.dispatch(push('/about-us'))
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={this.goToAboutPage}>Go to about page via redux</button>
      </div>
    )
  }
}

export default connect()(Home)
