import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class ChatRoom extends Component {
  render(){
  return (
    <div className="ChatRoom" >
    This displays all the messages
      <Message />
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    user: this.props
  }
}

export default connect(mapStateToProps)(ChatRoom);