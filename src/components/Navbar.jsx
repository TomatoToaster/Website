import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    return (
        <ul className="header">
          <li><NavLink to="/"><Icon name='reply' size='large' /></NavLink></li>
        </ul>
    );
  }
}

export default Navbar;