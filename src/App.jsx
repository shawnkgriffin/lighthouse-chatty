import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import MessageList from './components/MessageList.jsx';
import ChatBar from './components/ChatBar.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      connected: false,
      numberOfUsers: 0,
      username: '',
      messages: []
    };

    this.onNewMessage = this.onNewMessage.bind(this);
    this.onNewUsername = this.onNewUsername.bind(this);
  }

  componentDidMount() {
    this.WebSocket = new WebSocket('ws://localhost:3001/');

    // Will use this for a connected icon
    this.setState({ connected: true });

    //incoming message
    this.WebSocket.onmessage = event => {

      const newMessage = JSON.parse(event.data);

      // There are different types of messages. We need to route on them.
      // The socket event data is encoded as a JSON string.
      // This line turns it into an object

      switch (newMessage.type) {
        case 'incomingMessage':
          // Update the state of the app component.
          // Calling setState will trigger a call to render() in App and all child components.
          this.setState({
            messages: this.state.messages.concat([
              {
                id: newMessage.id,
                type: newMessage.type,
                username: newMessage.username,
                content: newMessage.content,
                color: newMessage.color
              }
            ])
          });
          break;
        case 'incomingNotification':
          this.setState({
            messages: this.state.messages.concat([
              {
                id: newMessage.id,
                type: newMessage.type,
                username: '',
                content: newMessage.content
              }
            ])
          });
          break;
        case 'numberOfUsers':
          this.setState({ numberOfUsers: newMessage.numberOfUsers });
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error('Unknown event type ' + newMessage.type);
      }
    };
  }

  // when we get a new message, send it to the server
  // this will be called from the ChatBar component when a user presses the enter key.
  onNewMessage(username, content) {
    // Send the msg object as a JSON-formatted string.
    const newMessage = {
      type: 'postMessage',
      username: username,
      content: content
    };
    const jsonNewMessage = JSON.stringify(newMessage);
    this.WebSocket.send(jsonNewMessage);
  }

  // when the user changes their name, notify everyone.
  onNewUsername(newUsername) {
    // Send the msg object as a JSON-formatted string.
    const newMessage = {
      type: 'postNotification',
      content: `${this.state.username ||'Anonymous'} has changed their name to ${newUsername}.`
    };
    const jsonNewUserName = JSON.stringify(newMessage);
    this.WebSocket.send(jsonNewUserName);

    // set the new user's name.
    this.setState({ username: newUsername });
  }

  // Main render
  render() {
    return (
      <div>
        <NavBar numberOfUsers={this.state.numberOfUsers} />
        
        <MessageList messages={this.state.messages} />
        <ChatBar
          username={this.state.username}
          onNewMessage={this.onNewMessage}
          onNewUsername={this.onNewUsername}
        />
      </div>
    );
  }
}
export default App;
