import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

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

class TomatoHome extends Component {
  render() {
    return (
      <Fragment>
        <NavLink to="/SpillyGoose" className="sg-corner-link">
          <img src="/public/SpillyGoose/SpillyGooseLogoWebsite.png" alt="Spilly Goose" className="sg-corner-logo" onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <span className="sg-corner-label" style={{display: 'none'}}>Spilly Goose</span>
        </NavLink>
        <div className="tomato">
          <div className="menu">
            <NavButton navName="/about" buttonContent="About Me" imgName="profile-card.png" colorClassName='color1' />
            <NavButton navName="/interests" buttonContent="Interests" imgName="heart.png" colorClassName='color2' />
            <OpenLinkButton link='https://github.com/TomatoToaster' buttonContent='GitHub' imgName='github-octocat.png' colorClassName='color3' />
            <OpenLinkButton link='https://github.com/TomatoToaster/Website/' buttonContent='Source Code' imgName='file.png' colorClassName='color4' />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TomatoHome;
