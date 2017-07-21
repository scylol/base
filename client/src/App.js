import React, { Component } from 'react';
import Selection from '../src/components/Main/Selection';
import Games from '../src/components/Main/Games';
import ProfilePage from '../src/components/ProfilePage/profilePage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Selection title={'Region'}/>
      //   <Selection title={'Platform'}/>
      //   <Games />
      //   <ProfilePage />
      // </div>
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

export default App;
