import 'sanitize.css/sanitize.css';
import './index.css';

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { ConnectedRouter } = require('react-router-redux');
const store = require('./store').default;
const history = require('./store').history;
const App = require('./containers/app');
const target = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
