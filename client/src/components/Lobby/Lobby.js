import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './Icon';
import Title from './Title';
import Room from './Room';
import Required from './Required';

class Lobby extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {/* <div className="lobby" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}> */}
        <h3>WoW - North America - PC</h3>
          <Room />
          <Room />
          <Room />
      </div>
    );
  }
}


const mapStateToProps = state => {

};

export default connect(mapStateToProps)(Lobby);