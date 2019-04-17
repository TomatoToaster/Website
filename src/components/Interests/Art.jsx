import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Art extends Component {
  render() {
    return (
      <Segment>
        <h2>Pixel Art</h2>
        <p>Full disclaimer, I've only recently started learning how to make this, so I'm still very much an amateur!</p>
        <a href={'https://github.com/TomatoToaster/Backgrounds.git'} target='_blank'>
          <p>
            Check out some of the backgrounds I've been working on.
          </p>
        </a>
        <br/>
        <a href={'https://github.com/TomatoToaster/Sprites.git'} target='_blank'>
          <p>
            Or some of the sprites.
          </p>
        </a>
      </Segment>
    );
  }
}

export default Art;
