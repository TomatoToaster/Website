import React, { Component } from 'react';

class Stuff extends Component {
    render() {
        return (
            <>
                <h2>Welcome to my Website!</h2>
                <p>
                    I'm a Software Engineer/Game Developer living in New York City.
                </p>
                {/* It's time retire the college stuff */}
                {/* <p>
                    I graduated from Northeastern University with a degree in Computer Science/Mathematics.
                </p> */}
                <p>
                    This a website I made to give a brief overview of who I am. I'll also be showcasing my games here.
                </p>
                <h2>Contact Me:</h2>
                <p>
                    Email: <a href='mailto:social@tomatotoaster.com'>social@tomatotoaster.com</a>
                </p>
            </>
        );
    }
}

export default Stuff;
