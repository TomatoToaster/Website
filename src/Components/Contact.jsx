import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Info</h2>
        <p>Name: Amal Nazeem</p>
        <p>Email: amalnazeem@gmail.com</p>
        <p>Github: https://github.com/TomatoToaster</p>
        <p>Resume: <a href="/Resume.pdf" target="_blank">Click Here</a></p>
      </div>
    );
  }
}

export default Contact;