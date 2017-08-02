import React, { Component } from "react";
import { connect } from "react-redux";
import { chatRoom } from "../../actions/actions";

class Message extends Component {
  sendChat = event => {
    event.preventDefault();
    let message = this.input.value;
    this.props.dispatch(chatRoom(message));
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.sendChat(e)}>
          <input
            type="text"
            placeholder="Enter message..."
            ref={input => (this.input = input)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default connect(null)(Message);
