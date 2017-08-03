import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, logoutUser, joinLobbiesRoom } from '../actions/actions';
import * as Cookies from 'js-cookie';
import CreateLobby from './createLobby';
import {userAccepted, userDeclined} from '../actions/lobby';



class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      hideUser: []
    }
    this._clickHandler = this._clickHandler.bind(this);
  }
  _userLogButton = () => {
    const accessToken = Cookies.get('accessToken');
    if (!this.props.currentUser.isLogged) {
      console.log('fetch user');
      this.props.dispatch(fetchUser(accessToken));
    } else if (this.props.currentUser.isLogged) {
      console.log('logout user');
      this.props.dispatch(logoutUser());
    }
  };

  acceptedHandler(name, room) {
    const data = {
      name: name,
      room: room
    }
    console.log('the data is', data)
    this.props.dispatch(userAccepted(data));
    this.setState({hideUser: [...this.state.hideUser, true]})
  }

  declinedHandler(socketId) {
    console.log('hello')
    this.props.dispatch(userDeclined(socketId));
    this.setState({hideUser: [...this.state.hideUser, true]})
    this.setState({showFeedback: true})
  }

   _clickHandler() {
     this.props.dispatch(joinLobbiesRoom(this.props.selection));
    
  }

  render() {

    let feedback = this.props.feedback.map((feedback, index) => {
      return (
        <div className='feedback'  key={index}>
        <p>{feedback}</p>
        <Link to={'/lobby'}>
        <button onClick={this._clickHandler}>Lobby Room</button>
        </Link>
        </div>
      )
    })
    

    let signerUppers = this.props.signerUpInfo.map((user, index) => {
      if(this.state.hideUser[index] === true) {
        return (
          ''
        )
      }
      return (
        <div className= 'user-info'  key={index}>
          <h3>{user[0].user.name}</h3>
         <button className='accept-btn' onClick={() => this.acceptedHandler(this.props.signerUpInfo[index][0].user.name, this.props.signerUpInfo[index][0].user.roomNumber)}>Accept</button>
         <button className='decline-btn' onClick={() => this.declinedHandler(this.props.signerUpInfo[index][1])}>Decline</button>
        </div>
      )
    })

    let acceptedUsers = this.props.acceptedUsers.map((user, index) => {
      return (
        <div className= 'accepted-user'  key={index}>
          <h6>{user.user.name} has joined the party!</h6>
        </div>
      )
    })
    let buttonText = '';
    this.props.currentUser.isLogged
      ? (buttonText = 'Log Out')
      : (buttonText = 'Log In');

    let buttonPath = '';
    this.props.currentUser.isLogged
      ? (buttonPath = '/api/auth/logout')
      : (buttonPath = '/api/auth/google');

    return (
      <div className="sidebar">
        <Link to={'/'} className="main-text">
          <h1>Base</h1>
        </Link>
        <CreateLobby />
        <h3>PENDING</h3>
        {signerUppers}
        <h3>ACCEPTED</h3>
        {acceptedUsers}
        <h3>FEEDBACK</h3>
        {feedback}
        <div className="profile-container">
          <img src={this.props.profileImage} alt="" />
          <p>
            {this.props.name}
          </p>
        </div>
        <a href={buttonPath}>
          <button className="logout" onClick={this._userLogButton}>
            {buttonText}
          </button>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reducer.currentUser,
    selection: state.reducer.userSelections,
    signerUpInfo: state.lobbyReducers.userInfo,
    acceptedUsers: state.lobbyReducers.acceptedUsers,
    feedback: state.lobbyReducers.feedback
  };
};

export default connect(mapStateToProps)(SideBar);
