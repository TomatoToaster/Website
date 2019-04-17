import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Games extends Component {
  render() {
    return (
      <Segment>
        <h2>Video Games</h2>
        <a href={'/OneTwo'} target='_blank'>
          Try out a simple game I made by clicking here.
        </a>
        <span>(Click/tap the screen to alternate between moving and shooting.)</span>
      </Segment>
    );
  }
}

export default Games;