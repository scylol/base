import React, { Component } from 'react';

export default class Required extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 10, marginRight: 10 }}>
        <div>{this.props.icon}</div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}