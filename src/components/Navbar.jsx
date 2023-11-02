import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import InterestCategories from './Interests/Categories';
import classNames from 'classnames';

const SUBCATEGORIES = {
  'interests': InterestCategories
}

const NavBarMenuItem = (subtopicName) => (name, currentSubcategory) => (
  <li className={classNames({'active-nav-subcategory': currentSubcategory == name})}>
    <NavLink to={'/' +subtopicName + '/' + name}>
      <div className={'navbar-text-button'} active={currentSubcategory == name}>{name}</div>
    </NavLink>
  </li>
);

class Navbar extends Component {
  render() {
    let currentCategory = this.props.match.params.page
    let activeSubcategory = this.props.match.params.subcategory
    return (
        <ul className="header">
          <li><NavLink to="/"><img src='/public/back.png' /></NavLink></li>
          {SUBCATEGORIES.hasOwnProperty(currentCategory) && (
            SUBCATEGORIES[currentCategory].map(subcategory => NavBarMenuItem(currentCategory)(subcategory, activeSubcategory))
          )}
        </ul>
    );
  }
}

export default Navbar;
