import React, { Component, Fragment } from 'react';

class Games extends Component {
  render() {
    return (
      <Fragment>
        <h2>Video Games</h2>
        <div className='game-preview'>
          <p>As featured on my <a href={'https://tomatotoaster.itch.io'}>itch.io</a>:</p>
          <p>
            <iframe className='itchFrame' width="552" height="167" frameborder="0" src="https://itch.io/embed/2333531?dark=true"><a href="https://tomatotoaster.itch.io/video-room">Video Room by TomatoToaster</a></iframe>
          </p>
          <p>
            <iframe className='itchFrame' width="552" height="167" frameborder="0" src="https://itch.io/embed/1654950?dark=true"><a href="https://tomatotoaster.itch.io/stardustin">Stardustin by TomatoToaster</a></iframe>
          </p>
          <p>
            <iframe className='itchFrame' width="552" height="167" frameborder="0" src="https://itch.io/embed/2044545?dark=true"><a href="https://tomatotoaster.itch.io/rainbee">RainBee by TomatoToaster</a></iframe>
          </p>
          <p>
            <iframe className='itchFrame' width="552" height="167" frameborder="0" src="https://itch.io/embed/2160954?dark=true"><a href="https://tomatotoaster.itch.io/fishing-boots">Fishing Boots by TomatoToaster</a></iframe>
          </p>
          <p>
            Or try this game that I've hosted on my website by clicking below:
          </p>
          <a href={'https://onetwo.tomatotoaster.com'} target='_blank'>
            <img src='https://raw.githubusercontent.com/TomatoToaster/OneTwo/master/Game_Preview.png'
              className='game-preview-image' />
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Games;
