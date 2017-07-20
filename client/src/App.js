import React, { Component } from 'react';
import Selection from '../src/components/Main/Selection';
import Games from '../src/components/Main/Games';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Selection title={'Region'}/>
        <Selection title={'Platform'}/>
        <Games />
      </div>
    );
  }
}

export default App;
