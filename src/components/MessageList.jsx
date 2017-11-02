import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor() {
    super();
  }
  render() {
    const messages = this.props.messages.map(message => {
      return (
        <Message
          key={message.id}
          type={message.type}
          username={message.username}
          color={message.color}
          content={message.content}
        />
      );
    });
    return <main className="messages">{messages}</main>;
  }
}
export default MessageList;
