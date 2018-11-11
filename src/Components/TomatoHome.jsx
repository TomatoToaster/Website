import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const ICON_SIZE = 'large';

const NavButton = ({navName, buttonContent, iconName}) => {
  return (
    <NavLink to={navName}>
        <Button  animated='fade' className='color1' >
            <Button.Content visible>
            {buttonContent}
          </Button.Content>
          <Button.Content hidden>
            <Icon name={iconName} size={ICON_SIZE} />
          </Button.Content>
        </Button>
    </NavLink>
  );
}

const OpenLinkButton = ({link, buttonContent, iconName}) => {
  return (
    <a href={link} target='_blank'>
      <Button  animated='fade' className='color1' >
          <Button.Content visible>
          {buttonContent}
        </Button.Content>
        <Button.Content hidden>
          <Icon name={iconName} size={ICON_SIZE} />
        </Button.Content>
      </Button>
    </a>
  );
}

class TomatoHome extends Component {
  render() {
    return (
      <Fragment>
        <div className="tomato">
          <div className="menu">
            <NavButton navName="/about" buttonContent="About" iconName="address card outline" /> 
            <NavButton navName="/interests" buttonContent="Interests" iconName="heart outline" /> 
            <OpenLinkButton link='mailto:amalnazeem@gmail.com' buttonContent='Contact' iconName='paper plane outline' />
            <OpenLinkButton link='https://github.com/TomatoToaster' buttonContent='GitHub' iconName='github alternate' />
            <OpenLinkButton link='/AmalNazeem_Resume.pdf' buttonContent='Resume' iconName='file alternate outline' />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TomatoHome;