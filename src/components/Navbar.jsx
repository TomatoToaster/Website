import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PortfolioCategories from './Portfolio/PortfolioCategories';
import InterestCategories from './Interests/InterestCategories';
import classNames from 'classnames';

const SUBCATEGORIES = {
  'portfolio-sections': PortfolioCategories,
  'interests': InterestCategories,
  'SpillyGoose': ['Game', 'Devlog'],
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
          <li><NavLink to='/'><div className='navbar-back-button'>{'< back'}</div></NavLink></li>
          {SUBCATEGORIES.hasOwnProperty(currentCategory) && (
            SUBCATEGORIES[currentCategory].map(subcategory => NavBarMenuItem(currentCategory)(subcategory, activeSubcategory))
          )}
        </ul>
    );
  }
}

export default Navbar;
