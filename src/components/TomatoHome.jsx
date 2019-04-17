import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NavButton = ({navName, buttonContent, imgName, colorClassName='color0'}) => (
  <NavLink to={navName}>
      <div className={'fade-button ' + colorClassName} >
        <div className='text-content'>
          {buttonContent}
        </div>
        <div className='icon-content'>
          <img src={'/' + imgName} />
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
            <NavButton navName="/about" buttonContent="About Me" imgName="profile-card.png" colorClassName='color1' /> 
            <NavButton navName="/interests" buttonContent="Interests" imgName="heart.png" colorClassName='color2' /> 
            <OpenLinkButton link='https://github.com/TomatoToaster' buttonContent='GitHub' imgName='github-octocat.png' colorClassName='color3' />
            <OpenLinkButton link='/AmalNazeem_Resume.pdf' buttonContent='Resume' imgName='file.png' colorClassName='color4' />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TomatoHome;