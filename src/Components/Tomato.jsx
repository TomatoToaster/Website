import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Tomato extends Component {
  render() {
    return (
      <div>
        <div className="tomato">
          <div className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </div>
        </div>
      </div>
    );
  }
}

export default Tomato;