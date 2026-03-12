import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GameFooter from './GameFooter';
import SpillyGooseDevlog from './SpillyGooseDevlog';
import SpillyGooseDevlogEntry from './SpillyGooseDevlogEntry';

const IOS_APP_STORE_URL = null; // Add iOS App Store URL here when ready
const GOOGLE_PLAY_URL = null;   // Add Google Play URL here when ready

const IOS_TESTER_URL = 'https://tally.so/r/jaMr8a';
const ANDROID_TESTER_URL = 'https://tally.so/r/lbAjGB';

const TAGLINES = [
  // 'A mobile game about a very messy goose.',
  'Stack and run as long as you can!',
  'Steal cups and keep running!',
  'Cause chaos and chase your high score!',
  'Hold onto your coffee!',
];

const AppStoreBadge = ({ platform, url, testerUrl }) => {
  const label = platform === 'ios' ? 'App Store' : 'Google Play';
  const sublabel = platform === 'ios' ? 'Download on the' : 'Get it on';

  if (url) {
    return (
      <a href={url} target='_blank' rel='noopener noreferrer' className='sg-store-badge sg-store-badge--active'>
        <span className='sg-store-badge__sub'>{sublabel}</span>
        <span className='sg-store-badge__label'>{label}</span>
      </a>
    );
  }

  return (
    <div className='sg-store-badge sg-store-badge--soon'>
      <span className='sg-store-badge__sub'>{sublabel}</span>
      <span className='sg-store-badge__label'>{label}</span>
      <span className='sg-store-badge__coming-soon'>Coming Soon</span>
      {testerUrl && (
        <a href={testerUrl} target='_blank' rel='noopener noreferrer' className='sg-store-badge__tester'>
          Want to be a tester?
        </a>
      )}
    </div>
  );
};

const Screenshot = ({ index }) => (
  <div className='sg-screenshot'>
    <img
      src={`/public/SpillyGoose/screenshot-${index}.png`}
      alt={`Screenshot ${index}`}
      className='sg-screenshot__img'
      onError={e => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
    <div className='sg-screenshot__placeholder'>
      <span>Coming Soon</span>
    </div>
  </div>
);

class SpillyGoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taglineIndex: Math.floor(Math.random() * TAGLINES.length),
      visible: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ visible: false });
      setTimeout(() => {
        this.setState(prev => ({
          taglineIndex: (prev.taglineIndex + 1) % TAGLINES.length,
          visible: true,
        }));
      }, 400);
    }, 3500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { taglineIndex, visible } = this.state;
    return (
      <div className='sg-page'>
        <Switch>
          <Route path='/SpillyGoose/Devlog/:date' component={SpillyGooseDevlogEntry} />
          <Route exact path='/SpillyGoose/Devlog' component={SpillyGooseDevlog} />
          <Route exact path='/SpillyGoose'><Redirect to='/SpillyGoose/Game' /></Route>
          <Route path='/SpillyGoose/Game'>
        <div className='sg-hero'>
          <h1 className='sg-title'>Spilly Goose</h1>
          <p className={`sg-tagline${visible ? '' : ' sg-tagline--hidden'}`}>{TAGLINES[taglineIndex]}</p>
          <div className='sg-store-badges'>
            <AppStoreBadge platform='ios' url={IOS_APP_STORE_URL} testerUrl={IOS_TESTER_URL} />
            <AppStoreBadge platform='android' url={GOOGLE_PLAY_URL} testerUrl={ANDROID_TESTER_URL} />
          </div>
        </div>

        <div className='sg-section'>
          <h2 className='sg-section-title'>Screenshots</h2>
          <div className='sg-screenshots'>
            <Screenshot index={1} />
            <Screenshot index={2} />
            <Screenshot index={3} />
          </div>
        </div>

        <div className='sg-section'>
          <h2 className='sg-section-title'>Gameplay</h2>
          <div className='sg-video-placeholder'>
            <span>Gameplay Video</span>
            <span className='sg-video-placeholder__sub'>Coming Soon</span>
          </div>
        </div>

        <div className='sg-section'>
          <h2 className='sg-section-title'>About the Game</h2>
          <p className='sg-description'>
            Spilly Goose is coming soon. Check back here for more details!
          </p>
        </div>
          </Route>
        </Switch>
        <GameFooter />
      </div>
    );
  }
}

export default SpillyGoose;
