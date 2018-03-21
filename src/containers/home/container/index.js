const { push } = require('react-router-redux');

const {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} = require('../../../actions/counter');

const Connect = require('react-redux').connect;
const Home = require('../components/');

const internals = {};

internals.connect = Connect(
  state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
  }),
  {
    increment: increment,
    incrementAsync: incrementAsync,
    decrement: decrement,
    decrementAsync: decrementAsync,
    changePage: () => push('/about-us')
  }
);

module.exports = internals.connect(Home);
