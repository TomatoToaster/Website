import React, { Component, Fragment } from 'react';
import Games from './Games';
import Art from './Art';

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <Games />
        <div className='portfolio-section-gap' />
        <Art />
      </Fragment>
    );
  }
}

export default Portfolio;
