import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Icon from './Icon';
// import Title from './Title';
import Room from './Room';
// import Required from './Required';
import { fetchPlatform } from '../../actions/lobby';

class Lobby extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentWillMount() {
  //  this.props.fetchPlatform('XBOX');
  }

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

function mapStateToProps(state) {
  return {
    platform: 'PC',
    region: 'NA',
    game: 'WoW'
  }
}

export default connect(mapStateToProps, { fetchPlatform })(Lobby);