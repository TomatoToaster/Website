import React, { Component, Fragment } from 'react';

class Games extends Component {
  render() {
    return (
      <Fragment>
        <h2>Video Games</h2>
        <p>
          <a href={'/OneTwo'} target='_blank'> Try out a simple game I made by clicking here. </a>
          (Click/tap the screen to alternate between moving and shooting.)
        </p>
      </Fragment>
    );
  }
}

export default Games;