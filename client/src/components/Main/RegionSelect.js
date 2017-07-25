import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateRegionSelection } from '../../actions/actions';

class RegionSelect extends Component {
  _clickHandler = e => {
    this.props.dispatch(updateRegionSelection(e.target.firstChild.innerHTML));
  };
  render() {
    return (
      <div className="select-platform">
        <h2>Select Your Region</h2>
        <div className="platforms-container">
          <div
            className="platform"
            onClick={event => this._clickHandler(event)}
          >
            <p>North America</p>
            <img
              src="https://vignette4.wikia.nocookie.net/leagueoflegends/images/1/14/NA_server.png/revision/latest/scale-to-width-down/100?cb=20150411083229"
              alt=""
            />
          </div>
          <div
            className="platform"
            onClick={event => this._clickHandler(event)}
          >
            <p>Europe</p>
            <img
              src="https://vignette1.wikia.nocookie.net/leagueoflegends/images/9/9f/EUW_server.png/revision/latest/scale-to-width-down/100?cb=20150411082720"
              alt=""
            />
          </div>
          <div
            className="platform"
            onClick={event => this._clickHandler(event)}
          >
            <p>South America</p>
            <img
              src="https://vignette2.wikia.nocookie.net/leagueoflegends/images/4/4b/LAS_server.png/revision/latest/scale-to-width-down/100?cb=20150411083135"
              alt=""
            />
          </div>
          <div
            className="platform"
            onClick={event => this._clickHandler(event)}
          >
            <p>OCE</p>
            <img
              src="https://vignette3.wikia.nocookie.net/leagueoflegends/images/d/db/OCE_server.png/revision/latest/scale-to-width-down/100?cb=20150411083247"
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

export default connect(mapStateToProps)(RegionSelect);
