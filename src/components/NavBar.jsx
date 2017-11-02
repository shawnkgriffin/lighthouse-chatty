import React, { Component } from 'react';
 
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }
  render() {
    const numberOfUsers = this.props.numberOfUsers;
    const loggedIn = (numberOfUsers === 1) 
    ? `You are the only one logged in. Have fun chatting to yourself.`
    : `${numberOfUsers} users logged in.`;
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          Chatty
        </a>
        <a className = "navbar-numberOfUsers">{loggedIn}. </a>
      </nav>
    );
  } 
}
export default NavBar;
