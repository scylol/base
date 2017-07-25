import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './Icon';
import Title from './Title';
import Room from './Room';
import Required from './Required';
import { fetchPlatform } from '../../actions/lobby';

class Lobby extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  //  this.props.fetchPlatform('XBOX');
  }

  render() {
    return (
      <div className="lobby" style={{ marginLeft: '25%' }}>
        <h3>{this.props.platform}Hello</h3>
          <Room />
          <Room />
          <Room />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    platform: state.platform,
    region: state.region,
    game: state.game
  }
}

export default connect(mapStateToProps, { fetchPlatform })(Lobby);