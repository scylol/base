import React, { Component } from 'react';
import SelectionBox from './SelectionBox';

export default class Selection extends Component {
  render(){
    return (
      <div>
        <div style={{ textAlign: 'center', fontSize: 30 }}>{this.props.title}</div>
        <div>
    <ul style={{ listStyle: 'none', width: '100%' }}>
          <SelectionBox text={'PC'} />
          <SelectionBox text={'XBOX'} />
          <SelectionBox text={'Playstation'} />
          <SelectionBox text={'Mobile'} />
    </ul>
        </div>
      </div>
    );
  }
}