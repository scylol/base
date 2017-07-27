import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './createLobby.css';
import { socket } from '../App';

export default class CreateLobby extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      game: '',
      region: '',
      platform: '',
      voice: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleChange(event) {
    const category = event.target.className.split(' ')[1];
    let obj = {};
    obj[category] = event.target.value;
    this.setState(obj);
  }
  _clickHandler() {
    socket.emit('create-group', {
      currentUser: this.props.currentUser,
      selection: this.props.selection
    });
  }

  render() {
    return (
      <div className="modal-div">
        <button className="create-lobby-button" onClick={this.openModal}>
          Create Lobby
        </button>
        <Modal
          className="modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <span className="close" onClick={this.closeModal}>
            &times;
          </span>
          <div className="create-lobby-header">
            <h2>Lobby Creator</h2>
          </div>
          <form className="create-lobby">
            <div className="dropdown-section">
              Game:<select
                className="user-selections game"
                onChange={event => this.handleChange(event)}
              >
                <option />
                <option>Dota 2</option>
                <option>League of Legends</option>
                <option>Overwatch</option>
                <option>Diablo 3</option>
              </select>
              Region:<select
                className="user-selections region"
                onChange={event => this.handleChange(event)}
              >
                <option />
                <option>North America</option>
                <option>South America</option>
                <option>Europe</option>
                <option>OCE</option>
              </select>
              Platform:<select
                className="user-selections platform"
                onChange={event => this.handleChange(event)}
              >
                <option />
                <option>PC</option>
                <option>Xbox One</option>
                <option>PS4</option>
                <option>Switch</option>
              </select>
              Voice Required:<select
                className="user-selections voice"
                onChange={event => this.handleChange(event)}
              >
                <option />
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="text-section">
              Title:{' '}
              <input className="user-selections" type="text" maxLength="35" />
              Start Time: <input className="user-selections" type="text" />
              Ideal Party Size:<select className="user-selections">
                <option />
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>More Than 6</option>
              </select>
            </div>
            <div className="short-description">
              Description: <textarea rows="4" cols="50" />
            </div>
            <Link to={'/lobby'} onClick={this.closeModal}>
              <input
                className="create-lobby-button"
                type="submit"
                value="Create Lobby"
                onClick={this._clickHandler.bind(this)}
              />
            </Link>
          </form>
        </Modal>
      </div>
    );
  }
}
