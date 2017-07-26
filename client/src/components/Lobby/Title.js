import React, { Component } from 'react';
import LobbyModal from './Modal';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  showModal = () => {
      alert('Yolo');
  }
  render() {

  return (
    <div>
   <a href="#"><h3 style={{ width: 400, marginLeft: 20 }}>Arthas Farm</h3></a>
   </div>
  );
  }
}

