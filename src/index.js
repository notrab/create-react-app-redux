import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { IntlProvider } from 'react-intl';

import * as serviceWorker from 'utils/serviceWorker';
import history from 'utils/history';
import App from 'containers/App';

import store from './store';
import messages from './i18n-en-us.json';

const target = document.querySelector('#root');

render(
  <IntlProvider locale="en" messages={messages}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </IntlProvider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
