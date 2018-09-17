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
        <a href="/pic.jpg" target="_blank"><p>Resume</p></a>
      </div>
    );
  }
}

export default Contact;