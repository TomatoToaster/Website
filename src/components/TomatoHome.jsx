import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PromoButton from './PromoButton';
import { AppleIcon, AndroidIcon, DesktopIcon, HTML5Icon } from './PlatformIcons';

const NavButton = ({navName, buttonContent, imgName, colorClassName='color0'}) => (
  <NavLink to={navName}>
      <div className={'fade-button ' + colorClassName} >
        <div className='text-content'>
          {buttonContent}
        </div>
        <div className='icon-content'>
          <img src={'/public/' + imgName} alt={buttonContent} />
        </div>
      </div>
  </NavLink>
);

const OpenLinkButton = ({link, buttonContent, imgName, colorClassName='color0'}) => (
  <a href={link} target='_blank'>
    <div className={'fade-button ' + colorClassName} >
      <div className='text-content'>
        {buttonContent}
      </div>
      <div className='icon-content'>
        <img src={'/public/' + imgName} alt={buttonContent} />
      </div>
    </div>
  </a>
);

const sgBadges = [
  { icon: <AppleIcon />,   label: 'iOS',     tooltip: 'iOS app' },
  { icon: <AndroidIcon />, label: 'Android', tooltip: 'Android app' },
];

const webDevBadges = [
  { icon: <DesktopIcon />, label: 'PC',    tooltip: 'Play on PC' },
  { icon: <HTML5Icon />,   label: 'HTML5', tooltip: 'Play in browser' },
];

class TomatoHome extends Component {
  render() {
    return (
      <Fragment>
        <PromoButton
          href="https://tomatotoaster.itch.io/web-developer"
          imgSrc="/public/WebDeveloper/WebDeveloperAnimatedLogo.gif"
          imgAlt="Web Developer"
          badges={webDevBadges}
          position="left"
        />
        <PromoButton
          to="/SpillyGoose"
          imgSrc="/public/SpillyGoose/SpillyGooseLogoWebsite.png"
          imgAlt="Spilly Goose"
          badges={sgBadges}
          position="right"
        />
        <div className="tomato">
          <div className="menu">
            <NavButton navName="/about" buttonContent="About Me" imgName="profile-card.png" colorClassName='color1' />
            <NavButton navName="/portfolio" buttonContent="Portfolio" imgName="heart.png" colorClassName='color2' />
            <OpenLinkButton link='https://github.com/TomatoToaster' buttonContent='GitHub' imgName='github-octocat.png' colorClassName='color3' />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TomatoHome;
