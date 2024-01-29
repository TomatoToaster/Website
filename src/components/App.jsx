import React, { Component, Fragment } from 'react';
import {
    Route,
    BrowserRouter,
} from 'react-router-dom';
import Interests from './Interests/Interests';
import Tomato from './TomatoHome';
import About from './About';
import Navbar from './Navbar';


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
            <div className='page-container'>
            <Route path="/:page/:subcategory?" component={Navbar} />
            <div className='page-text-container'>
            <Route path="/about" component={About} />
            <Route path="/interests/:interest?" component={Interests} />
            </div>
            </div>
            </Fragment>
            </BrowserRouter>
        );
    }
}
export default App;
