import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.username, content: '', error: '' };
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
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
  onUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  // Main render
  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder="Your Name (Optional)"
          onChange={this.onUserNameChange}
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
