import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          Chatty
        </a>
      </nav>
    );
  }
}
export default NavBar;
