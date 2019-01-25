/**
 * App Layout
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'containers/Home';
import About from 'containers/About';

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s"
      defaultTitle="React Redux Boilerplate"
    >
      <meta name="description" content="A React Redux Boilerplate application" />
    </Helmet>

    <Header/>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </Switch>
    </main>
  </div>
);

export default App;
