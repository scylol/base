import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Icon from './Icon';
// import Title from './Title';
import Room from './Room';
// import Required from './Required';


class Lobby extends Component {
  constructor(props) {
    super(props);

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

const mapStateToProps = (state) => {
  const { platform, region, game } = state.reducer.userSelections;
  return {
    platform,
    region,
    game
  }
}

export default connect(mapStateToProps)(Lobby);