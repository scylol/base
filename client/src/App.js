import React, { Component } from 'react';
import * as Cookies from 'js-cookie';
import { connect } from "react-redux";
import { fetchUser } from "../src/actions/actions";
import Selection from '../src/components/Main/Selection';
import Games from '../src/components/Main/Games';
import ProfilePage from '../src/components/ProfilePage/profilePage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginPage from '../src/components/login-page';

class App extends Component {

  componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        console.log(accessToken)
        console.log('type of', typeof accessToken)
        if(accessToken) {
            this.props.dispatch(fetchUser(accessToken));
        }
    }
  render() {
    if (!this.props.currentUser) {
            return <LoginPage />;
        }
    return (
       <Router>
        <div className='app'>
        <Route exact path ='/' component={ProfilePage} />
        <Route exact path ='/profile' component={ProfilePage} />
        <Route exact path ='/games' component={Games} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state)=>({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App);