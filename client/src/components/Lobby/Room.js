import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lobby from './Lobby';


class Room extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    
    return (
      <div className="lobby" >
        <h3>Select A Lobby</h3>
          <Lobby />
      </div>
    ); 
  }

}

const mapStateToProps = (state) => {
  const { platform, region, game } = state.reducer.userSelections;
  return {
    platform,
    region,
    game
  }
}

export default connect(mapStateToProps)(Room);