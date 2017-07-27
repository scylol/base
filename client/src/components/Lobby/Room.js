import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './Icon';
import Title from './Title';
import Required from './Required';
import Modal from './Modal';

class Room extends Component {

  render() {
    return (
      <div className="room" style={styles.roomStyles}>
              <Icon />
              <Title />
              <a href='#'><Modal /></a>
            <Required icon={'Icon'} name={'Mic'}/>
            <Required icon={'7 pm'} name={'Time'}/>
            <Required icon={'English'} name={'Language'}/>
            <Required icon={'4/7'} name={'Players'}/>
            <button>Join</button>
      </div>
    );
  }
}

const styles = {
  roomStyles: {
    display: 'flex',
    flex: 1,
    borderStyle: 'solid',
    padding: 10,
    margin: 10
  }
};

const mapStateToProps = (state) => {
  return {
    platform: state.platform,
    region: state.region,
    game: state.game
  }
};

export default connect(mapStateToProps)(Room);