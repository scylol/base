import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateGameSelection } from '../../actions/actions';

class GameSelect extends Component {
  _clickHandler = e => {
    console.log(e.target.firstChild.innerHTML);
    this.props.dispatch(updateGameSelection(e.target.firstChild.innerHTML));
  };
  render() {
    return (
      <div className="select-platform">
        <h2>Select Your Game</h2>
        <div className="platforms-container">
          <div
            className="platform"
            onClick={event => this._clickHandler(event)}
          >
            <p>Dota 2</p>
            <img
              src="https://s-media-cache-ak0.pinimg.com/originals/2d/cd/80/2dcd80c6f5a21a437313adde93b373d8.jpg"
              alt=""
            />
          </div>
          <div
            className="platform"
            onClick={event => this._clickHandler(event)}
          >
            <p>League of Legends</p>
            <img
              src="https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343"
              alt=""
            />
          </div>
          <div className="platform" onClick={event => this._clickHandler(event)}>
            <p>Overwatch</p>
            <img
              src="http://i.imgur.com/YZ4w2ey.png"
              alt=""
            />
          </div>
          <div className="platform" onClick={event => this._clickHandler(event)}>
            <p>Diablo 3</p>
            <img
              src="https://s-media-cache-ak0.pinimg.com/originals/1d/ae/1a/1dae1ad263fbac22a9296014871cb980.png"
              alt=""
            />
          </div>
        </div>
        <Link to={'/games'}>
          <button>Next</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userSelections: state.userSelections
  };
};

export default connect(mapStateToProps)(GameSelect);
