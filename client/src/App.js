import React, { Component } from 'react';
import * as Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { fetchUser } from './actions/actions';
import Selection from './components/Main/Selection';
import Games from './components/Main/Games';
import ProfilePage from './components/ProfilePage/profilePage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from './components/login-page';
import SideBar from './components/SideBar';

class App extends Component {
  componentDidMount() {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      this.props.dispatch(fetchUser(accessToken));
    }
  }
  render() {
    return (
      <Router>
        <div className="app">
          <SideBar name={this.props.currentUser.name} profileImage={this.props.currentUser.photo} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/games" component={Games} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(App);
