import React from "react";
import Modal from "react-modal";
import "./createLobby.css";



export default class CreateLobby extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "white";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className='modal-div'>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          className='modal'
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
        <span className="close" onClick={this.closeModal}>&times;</span>
        <div className ='create-lobby-header'>
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Lobby Creator</h2>
        </div>
          <form className="create-lobby">
            <div className="dropdown-section">
              Game:<select className="user-selections">
                <option />
                <option>League of Legends</option>
                <option>Overwatch</option>
                <option>Hearthstone</option>
                <option>CSGO</option>
              </select>
              Region:<select className="user-selections">
                <option />
                <option>Americas</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
              Platform:<select className="user-selections">
                <option />
                <option>PC</option>
                <option>Xbox One</option>
                <option>PS4</option>
                <option>Switch</option>
              </select>
              Voice Required:<select className="user-selections">
                <option />
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className='text-section'>
            Title: <input className="user-selections" type="text" maxLength="35"/>
            Start Time: <input className="user-selections" type="text"/>
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
            <div className='short-description'>
            Description: <textarea rows="4" cols="50"></textarea>
            
            </div>
            <input className='create-lobby-button' type="submit" value='Create Lobby'/>
          </form>
        </Modal>
      </div>
    );
  }
}
