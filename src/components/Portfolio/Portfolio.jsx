import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Games from './Games';
import Art from './Art';

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        {!this.props.match.params.category && (
          <p>Please click on one of the above to learn more about my portfolio and see some of my work!</p>
        )}
        <Route path='/portfolio/art' component={Art} />
        <Route path='/portfolio/games' component={Games} />
      </Fragment>
    );
  }
}

export default Portfolio;
