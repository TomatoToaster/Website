import React, { Component, Fragment } from 'react';
import {
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Interests from './Interests/Interests';
import Tomato from './TomatoHome';
import About from './About';
import Navbar from './Navbar';
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

          <Container>
            <Route path="/:page" component={Navbar} />
            <Container className='page-text'>
              <Route path="/about" component={About} />
              <Route path="/interests/:interest?" component={Interests} />
            </Container>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;