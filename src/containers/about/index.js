/**
 * About-us page
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

const About = () =>
  <div>
    <Helmet>
      <title>About Page</title>
      <meta
        name="description"
        content="Description of About Page"
      />
    </Helmet>

    <h1><FormattedMessage id="about.title"/></h1>
    <p><FormattedMessage id="about.description"/></p>
  </div>

export default About
