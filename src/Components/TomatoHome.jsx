import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TomatoHome extends Component {
  render() {
    return (
      <div>
        <div className="tomato">
          <div className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/stuff">Stuff</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default TomatoHome;