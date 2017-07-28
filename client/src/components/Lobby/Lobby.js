import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Icon from './Icon';
// import Title from './Title';
import Room from './Room';
// import Required from './Required';
import { fetchPlatform } from '../../actions/lobby';
import {socket} from '../../App';

class Lobby extends Component {
  constructor(props) {
    super(props);
    socket.on('user-joined', (data) => {
      console.log(data);
    })

  }

  // renderLobbies() {
  //    socket.on('user-joined', (data) => {
  //     console.log(data);
  //   })
  // }

  render() {
    const { platform, region, game } = this.props;
    return (
      <div className="lobby" >
        <h3>{platform} - {region} - {game}</h3>
          <Room />
      </div>
    );
  }

}

const mapStateToProps = ({ userSelections }) => {
  const { platform, region, game } = userSelections;
  return {
    platform,
    region,
    game
  }
}

export default connect(mapStateToProps, { fetchPlatform })(Lobby);