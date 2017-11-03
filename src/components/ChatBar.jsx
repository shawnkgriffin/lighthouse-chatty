import React, { Component } from 'react';
/* 
 * Chatbar handles the chatbar on the bottom.
 * Key functionality
 * Name field. changing name and pressing enter sends a message to server.
 * Content field. changing content and pressing enter sends a message to server.
 * 
 */
class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.username, content: '', error: '' };
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
  }

  // onMessageSubmit when the user presses enter on the submit field.
  onMessageSubmit(event) {
    if (event.key == 'Enter') {
      this.props.onNewMessage(this.state.username, this.state.content);
      this.setState({ content: '' });
    }
  }

  // need an on change event
  onMessageChange(event) {
    this.setState({ content: event.target.value });
  }

  // need an on change event
  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  
  // need an on change event
  onUsernameSubmit(event) {
    if (event.key == 'Enter') {
      this.props.onNewUsername(event.target.value);
      this.setState({ username: event.target.value });
    }
    
  }

  // Main render
  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          onKeyPress={this.onUsernameSubmit}
          onChange={this.onUsernameChange}
          value={this.state.username}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.onMessageSubmit}
          onChange={this.onMessageChange}
          value={this.state.content}
        />
      </footer>
    );
  }
}
export default ChatBar;
