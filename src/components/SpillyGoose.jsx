import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GameFooter from './GameFooter';
import SpillyGooseDevlog from './SpillyGooseDevlog';
import SpillyGooseDevlogEntry from './SpillyGooseDevlogEntry';
import Lightbox from './Lightbox';

const IOS_APP_STORE_URL = null; // Add iOS App Store URL here when ready
const GOOGLE_PLAY_URL = null;   // Add Google Play URL here when ready
const VIDEO_URL = null;         // Add gameplay video URL here when ready

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

const Screenshot = ({ index }) => {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const src = `/public/SpillyGoose/screenshot-${index}.png`;

  return (
    <div
      className={`sg-screenshot${loaded ? ' sg-screenshot--clickable' : ''}`}
      onClick={loaded ? () => setOpen(true) : undefined}
    >
      <img
        src={src}
        alt={`Screenshot ${index}`}
        className='sg-screenshot__img'
        onLoad={() => setLoaded(true)}
        onError={e => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className='sg-screenshot__placeholder'>
        <span>Coming Soon</span>
      </div>
      {loaded && (
        <Lightbox open={open} onClose={() => setOpen(false)}>
          <img src={src} alt={`Screenshot ${index} fullscreen`} />
        </Lightbox>
      )}
    </div>
  );
};

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  if (VIDEO_URL) {
    return (
      <div
        className='sg-video-placeholder sg-screenshot--clickable'
        onClick={() => setOpen(true)}
      >
        <span>Gameplay Video</span>
        <Lightbox open={open} onClose={() => setOpen(false)}>
          <video src={VIDEO_URL} controls autoPlay />
        </Lightbox>
      </div>
    );
  }

  return (
    <div className='sg-video-placeholder'>
      <span>Gameplay Video</span>
      <span className='sg-video-placeholder__sub'>Coming Soon</span>
    </div>
  );
};

function SpillyGoose() {
  const [taglineIndex, setTaglineIndex] = useState(() => Math.floor(Math.random() * TAGLINES.length));
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTaglineIndex(i => (i + 1) % TAGLINES.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
          <VideoSection />
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

export default SpillyGoose;
