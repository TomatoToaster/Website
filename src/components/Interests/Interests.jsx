import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import Film from './Film';
import Literature from './Literature';
import Games from './Games';
import Art from './Art';

const INTERESTS = ['art', 'games', 'film', 'literature'];

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
          <p>Please click on one of the above to learn more about my interests and see some of my work!</p>
        )}

        <Route path='/interests/art' component={Art} />
        <Route path='/interests/games' component={Games} />
        <Route path='/interests/film' component={Film} />
        <Route path='/interests/literature' component={Literature} />
      </Fragment>
    );
  }
}

export default Interests;
