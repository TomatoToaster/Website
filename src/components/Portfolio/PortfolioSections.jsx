import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Games from './Games';
import Art from './Art';

class PortfolioSections extends Component {
  render() {
    return (
      <Fragment>
        {!this.props.match.params.category && (
          <p>Please click on one of the above to learn more about my portfolio and see some of my work!</p>
        )}
        <Route path='/portfolio-sections/art' component={Art} />
        <Route path='/portfolio-sections/games' component={Games} />
      </Fragment>
    );
  }
}

export default PortfolioSections;
