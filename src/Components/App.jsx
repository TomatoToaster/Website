import React, { Component, Fragment } from 'react';
import {
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Stuff from './Stuff.jsx';
import Contact from './Contact.jsx';
import Tomato from './TomatoHome.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import { Container } from 'semantic-ui-react';


/**
 * Container for the Single Page Application. Routes the whole thing to each
 * page
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter location="history">
        <Fragment>
          <Route exact path="/" component={Tomato} />

          <Route path="/:page" component={Navbar} />
          <Container>
            <Route path="/about" component={About} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;