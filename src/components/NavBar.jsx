import React, { Component } from 'react';
 
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          Chatty
        </a>
        <a className = "navbar-numberOfUsers">{this.props.numberOfUsers} users logged in. </a>
      </nav>
    );
  } 
}
export default NavBar;
