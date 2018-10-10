import React, { Component, Fragment } from 'react';
import {
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Interests from './Interests.jsx';
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

          <Container>
            <Route path="/:page" component={Navbar} />
            <Container className='page-text'>
              <Route path="/about" component={About} />
              <Route path="/interests" component={Interests} />
            </Container>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;