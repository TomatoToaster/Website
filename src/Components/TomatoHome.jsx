import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

let HomeButton = ({linkName, buttonContent, iconName}) => {
  return (
    <NavLink to={linkName}>
        <Button  animated='fade' color='#FD4848' className='color1' >
            <Button.Content visible>
            {buttonContent}
          </Button.Content>
          <Button.Content hidden>
            <Icon name={iconName} />
          </Button.Content>
        </Button>
    </NavLink>
  );
}

class TomatoHome extends Component {
  render() {
    return (
      <Fragment>
        <div className="tomato">
          <div className="menu">
            <HomeButton linkName="/" buttonContent="Home" iconName="home" /> 
            <HomeButton linkName="/about" buttonContent="About" iconName="address card outline" /> 
            <HomeButton linkName="/stuff" buttonContent="Stuff" iconName="file alternate outline" /> 
            <HomeButton linkName="/contact" buttonContent="Contact" iconName="paper plane outline" /> 
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TomatoHome;