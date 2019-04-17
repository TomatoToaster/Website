import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <ul className="header">
          <li><NavLink to="/"><img src='/back.png' /></NavLink></li>
        </ul>
    );
  }
}

export default Navbar;