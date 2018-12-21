import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Film from './Film';
import Literature from './Literature';
import Games from './Games';

const INTERESTS = ['film', 'literature', 'games'];

const MenuInterest = (name, currentInterest) => (
  <NavLink to={'/interests/' + name}>
    <Menu.Item name={name} active={currentInterest == name} />
  </NavLink>
);

class Interests extends Component {
  render() {
    return (
      <Fragment>
        <Menu pointing secondary>
          {INTERESTS.map(interest => MenuInterest(interest, this.props.match.params.interest))}
        </Menu>

        {!this.props.match.params.interest && (
          <h4>Still under construction, but please feel free to click one of the above!</h4>
        )}

        <Route path='/interests/film' component={Film} />
        <Route path='/interests/literature' component={Literature} />
        <Route path='/interests/games' component={Games} />
      </Fragment>
    );
  }
}

export default Interests;