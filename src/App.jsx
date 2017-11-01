import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import MessageList from './components/MessageList.jsx';
import ChatBar from './components/ChatBar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: { name: 'shawn' },
      messages: [
        { id: 1, username: 'shawn', content: 'This is my message' },
        { id: 2, username: 'harry', content: 'harry is hairy' }
      ]
    };

    this.onNewMessage = this.onNewMessage.bind(this);
  }

  componentDidMount() {
    this.WebSocket = new WebSocket('ws://localhost:3001/');
    console.log('ComponentDidMount', this.WebSocket);

    this.WebSocket.onmessage = function(event) {
      console.log('received', event.data);
 
      const newMessage = {
        id: event.data.id,
        username: event.data.username,
        content: event.data.content
      };
// comments
      const messages = this.state.messages.concat(newMessage);
      console.log(messages);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages });
    };
  }

  // when we get a new message, send it to the server
  onNewMessage(username, content) {
    // Send the msg object as a JSON-formatted string.
    const newMessage = {
      id: 1,
      username: username,
      content: content
    };
    const jsonNewMessage = JSON.stringify(newMessage);
    console.log('onNewMessage json', jsonNewMessage);
    this.WebSocket.send(jsonNewMessage);
  }

  // Main render
  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <ChatBar
          username={this.state.currentUser.name}
          onNewMessage={this.onNewMessage}
        />
      </div>
    );
  }
}
export default App;
