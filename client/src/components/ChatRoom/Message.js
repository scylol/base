import React, { Component } from "react";
import { connect } from "react-redux";
import { chatRoom } from "../../actions/actions";

class Message extends Component {

  sendChat = event => {
    event.preventDefault();
    let message = this.input.value;
    let data = {
      message: message,
      name: this.props.currentUser.name,
      room: this.props.room
    }
    this.props.dispatch(chatRoom(data));
  };

  showMessages() {
    return this.props.message.map((message, index) => <li key={index}>{message.message.name}: {message.message.message}</li>);
  }

  render() {
    return (
      <div>
      <ul>{this.showMessages()}</ul>
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

const mapStateToProps = (state) => {
 return {
   message: state.lobbyReducers.message,
   room: state.lobbyReducers.room,
   currentUser: state.reducer.currentUser
 }
}

export default connect(mapStateToProps)(Message);
