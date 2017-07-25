import React from 'react';
import Icon from './Icon';
import Title from './Title';
import Required from './Required';
import Players from './Players';

export default function Room () {
  return (
    <div className="lobby" style={styles.roomStyles}>
            <Icon />
            <Title />
            <Required icon={'Icon'} name={'Mic'}/>
            <Required icon={'7 pm'} name={'Time'}/>
            <Required icon={'Flag'} name={'Lang'}/>
            <Players />
            <button>Join</button>
      </div>
  );
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