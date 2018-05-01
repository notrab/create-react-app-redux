const React = require('react');
const { Route, Link } = require('react-router-dom');
const About = require('../about');
const Home = require('../home/container');

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

module.exports = App;
