import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Home from './Home.jsx';
import Stuff from './Stuff.jsx';
import Contact from './Contact.jsx';
import Tomato from './Tomato.jsx';


/**
 * Container for the Single Page Application.
 * Routes the whole thing to each page
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter location="history">
        <div>
          <h1>Welcome to my Website!</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/tomato">Tomato Version</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/tomato" component={Tomato}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;