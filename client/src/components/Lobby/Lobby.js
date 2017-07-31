import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './Icon';
import Title from './Title';
import Required from './Required';
import Modal from './Modal';

class Lobby extends Component {
  

  componentDidMount() {
    console.log(this.props.lobbies)
    // console.log(this.props.selections)
  }
  render() {
    // const { mic, time, language, partyNow, partyMax } = this.props;
    let lobbies = this.props.lobbies.map((lobby, index) => {
      return (
        <div className= 'room' key={index} style={styles.roomStyles}>
          <h3>{lobby.title}</h3>
          <p>{lobby.description}</p>
          <p>Voice Required: {lobby.voice}</p>
          <p>Start Time: {lobby.startTime}</p>
          <p> Ideal Party Size: {lobby.partySize}</p>
          <button>Sign Up</button>
        </div>
      )
    })
    return (
      <div className='lobby-container'>
      <h3>{this.props.selections.platform}</h3>
        {lobbies}
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

// const mapStateToProps = (state) => {
//   return {
//     mic: 'yes',
//     time: '7pm',
//     language: 'EN',
//     partyNow: '0',
//     partyMax: '4'
//   };
// };

const mapStateToProps = state => {
  return {
    lobbies: state.lobbyReducers.lobbies,
    selections: state.reducer.userSelections
  };
};

export default connect(mapStateToProps)(Lobby);

// <Icon />
//         <Title />
//         <Modal />

//         <Required name ={this.props.lobbies[0].voice} title={'Mic'} />
//         <Required name={this.props.lobbies[0].voice} title={'Time'} />
//         <Required name={this.props.lobbies[0].voice} title={'Lang'} />
//         <Required name={this.props.lobbies[0].voice} title={'Players'} />

//         <button>Join</button>