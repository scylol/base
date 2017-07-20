import React, { Component } from 'react';
import Box from './Box';

export default class Selection extends Component {
  render(){
    return (
      <div>
        <div style={{ textAlign: 'center', fontSize: 30 }}>{this.props.title}</div>
        <div>
    <ul style={{ listStyle: 'none', width: '100%' }}>
          <Box style={{ textAlign: 'center', display: 'tableCell', verticalAlign: 'middle' }}text={'Selection 1'} />
          <Box text={'Selection 2'} />
          <Box text={'Selection 3'} />
          <Box text={'Selection 4'} />
    </ul>
        </div>
      </div>
    );
  }
}