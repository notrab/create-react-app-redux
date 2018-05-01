const React = require('react');
const Classes = require('./styles.scss');
console.log(Classes);
module.exports = () => (
  <div>
    <h1>About Page</h1>
    <p className={`${Classes.redText} redText`}>Did you get here via Redux?</p>
  </div>
);
