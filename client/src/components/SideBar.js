import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, logoutUser } from '../actions/actions';
import * as Cookies from 'js-cookie';
import CreateLobby from './createLobby';
import {userAccepted} from '../actions/lobby';



class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      hideUser: []
    }
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

  _clickHandler(name, room) {
    const data = {
      name: name,
      room: room
    }
    console.log('the data is', data)
    this.props.dispatch(userAccepted(data));
    this.setState({hideUser: [...this.state.hideUser, true]})
  }

  render() {

    let signerUppers = this.props.signerUpInfo.map((user, index) => {
      if(this.state.hideUser[index] === true) {
        return (
          ''
        )
      }
      return (
        <div className= 'user-info'  key={index}>
          <h3>{user.user.name}</h3>
         <button className='accept-btn' onClick={() => this._clickHandler(this.props.signerUpInfo[index].user.name, this.props.signerUpInfo[index].user.roomNumber)}>Accept</button>
         <button className='decline-btn'>Decline</button>
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
    acceptedUsers: state.lobbyReducers.acceptedUsers
  };
};

export default connect(mapStateToProps)(SideBar);
