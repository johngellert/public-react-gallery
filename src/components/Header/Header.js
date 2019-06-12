import React, { Component } from 'react'; // import react and react component

// declare Header class, which extends Component
class Header extends Component {

    // define render method
    render() {

        return (
            // header element, includes h1 title
            <header className="App-header">
                <h1 className="App-title">Gallery of my life</h1>
            </header>
        );
    }
}

// export Header class
// imported at App.js
export default Header;
