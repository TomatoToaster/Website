import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Film from './Film';
import Literature from './Literature';
import Games from './Games';
import Art from './Art';

class Interests extends Component {
  render() {
    return (
      <Fragment>
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
