import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Film from './Film';
import Literature from './Literature';

class Interests extends Component {
  render() {
    return (
      <Fragment>
        {!this.props.match.params.category && (
          <p>Please click on one of the above to learn more about my interests!</p>
        )}
        <Route path='/interests/film' component={Film} />
        <Route path='/interests/literature' component={Literature} />
      </Fragment>
    );
  }
}

export default Interests;
