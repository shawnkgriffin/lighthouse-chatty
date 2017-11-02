import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
  }
  render() {
    switch (this.props.type) {
      case 'incomingMessage':
        return (
          <div className="message">
            <span className="message-username" style={{color:this.props.color}}>{this.props.username}</span>
            <span className="message-content">{this.props.content}</span>
          </div>
        );
      case 'incomingNotification':
        return (
          <div className="message system">
            <span className="message-content">{this.props.content}</span>
          </div>
        );
      default:
        // show an error in the console if the message type is unknown
        throw new Error('Message:Unknown event type ' + this.props.type);
    }
  }
}
export default Message;
