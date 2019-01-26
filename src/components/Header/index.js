/**
 * Header
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  <header>
    <Link to="/">Home</Link>
    <Link to="/about-us">About</Link>
    <Link to="/todo">Todo</Link>
  </header>

export default Header;
