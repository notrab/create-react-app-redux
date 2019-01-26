/**
 * Todo page
 */

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { getTodo } from './actions';
import ItemList from 'components/ItemList';

class Todo extends PureComponent {
  static propTypes = {
    getTodo: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTodo();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Todo Page</title>
          <meta
            name="todo"
            content="Description of Todo Page"
          />
        </Helmet>

        <h1><FormattedMessage id="todo.title"/></h1>
        
        {this.props.todo.map((item, i) => (
          <ItemList items={item} key={i}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ todoReducer }) => ({
  todo: todoReducer.todo
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTodo
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
