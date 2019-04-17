import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const ICON_SIZE = 'large';

const NavButton = ({navName, buttonContent, imgName}) => (
  <NavLink to={navName}>
      <div className='fade-button color1' >
        <div className='visibleContent'>
          {buttonContent}
        </div>
        <div className='hiddenContent'>
          <img src={'/' + imgName} />
        </div>
      </div>
  </NavLink>
);

const OpenLinkButton = ({link, buttonContent, imgName}) => (
  <a href={link} target='_blank'>
    <div className='fade-button color1'>
      <div className='visibleContent'>
        {buttonContent}
      </div>
      <div className='hiddenContent'>
        <img src={'/' + imgName} />
      </div>
    </div>
  </a>
);

class TomatoHome extends Component {
  render() {
    return (
      <Fragment>
        <div className="tomato">
          <div className="menu">
            <NavButton navName="/about" buttonContent="About Me" imgName="profile-card.png" /> 
            <NavButton navName="/interests" buttonContent="Interests" imgName="heart.png" /> 
            <OpenLinkButton link='https://github.com/TomatoToaster' buttonContent='GitHub' imgName='github.png' />
            <OpenLinkButton link='/AmalNazeem_Resume.pdf' buttonContent='Resume' imgName='file.png' />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TomatoHome;