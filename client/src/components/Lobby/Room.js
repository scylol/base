import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './Icon';
import Title from './Title';
import Required from './Required';
import Modal from './Modal';

class Room extends Component {

  render() {
    const { mic, time, language, partyNow, partyMax } = this.props;
    return (
      <div className="room" style={styles.roomStyles}>
        <Icon />
        <Title />
        <Modal />

        <Required name ={mic} title={'Mic'} />
        <Required name={time} title={'Time'} />
        <Required name={language} title={'Lang'} />
        <Required name={`${partyNow}/${partyMax}`} title={'Players'} />

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
    mic: 'yes',
    time: '7pm',
    language: 'EN',
    partyNow: '0',
    partyMax: '4'
  };
};

export default connect(mapStateToProps)(Room);