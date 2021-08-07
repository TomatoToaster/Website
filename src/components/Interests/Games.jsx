import React, { Component, Fragment } from 'react';

class Games extends Component {
  render() {
    return (
      <Fragment>
        <h2>Video Games</h2>
        <div className='game-preview'>
          <a href={'https://onetwo.tomatotoaster.com'} target='_blank'>
            <img src='https://raw.githubusercontent.com/TomatoToaster/OneTwo/master/Game_Preview.png'
              className='game-preview-image' />
          </a>
          <p>
            Try out a simple game I made by clicking the preview above.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Games;
