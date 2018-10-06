import React, { Component, Fragment } from 'react';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <h2>Contact Info</h2>
        <p>Name: Amal Nazeem</p>
        <p>Email: amalnazeem@gmail.com</p>
        <p>Github: https://github.com/TomatoToaster</p>
        <p>Resume: <a href="/Resume.pdf" target="_blank">click here</a></p>
      </Fragment>
    );
  }
}

export default Contact;