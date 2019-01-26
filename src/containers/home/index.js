/**
 * Home page
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from './actions';

const Home = props => (
  <div>
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="Description of Home Page"
      />
    </Helmet>

    <h1><FormattedMessage id="home.title"/></h1>
    <p><FormattedMessage id="home.count"/>: {props.count}</p>

    <p>
      <button onClick={props.increment}><FormattedMessage id="home.increment"/></button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        <FormattedMessage id="home.increment_async"/>
      </button>
    </p>

    <p>
      <button onClick={props.decrement}><FormattedMessage id="home.decrement"/></button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        <FormattedMessage id="home.decrement_async"/>
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        <FormattedMessage id="home.go_to_about_page"/>
      </button>
    </p>
  </div>
)

const mapStateToProps = ({ countReducer }) => ({
  count: countReducer.count,
  isIncrementing: countReducer.isIncrementing,
  isDecrementing: countReducer.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
