import React, { Component, Fragment } from 'react';

class Stuff extends Component {
  render() {
    return (
      <Fragment>
        <h2>Welcome to my Website!</h2>
        <p>I am a Product Manager/Software Engineer that graduated from Northeastern University (December 2018) with a degree in Computer Science/Mathematics.</p>
        <p>This a personal website I made to review some of the concepts I've learned making websites. It sometimes acts as a playground, but it's meant to give a brief overview of who I am.</p>
        <h2>Contact Me</h2>
        <p>Email: <a href='mailto:nazeem.a@husky.neu.edu'>nazeem.a@husky.neu.edu</a></p>
        <p>Phone: <a href='tel:5088474638'>508-847-4638</a></p>
      </Fragment>
    );
  }
}

export default Stuff;