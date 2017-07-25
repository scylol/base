import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePlatformSelection } from '../../actions/actions';
import Platform from './Selector';

class PlatformSelect extends Component {
  _clickHandler = e => {
    console.log(e.target);
    this.props.dispatch(updatePlatformSelection(e.target));
  };
  render() {
    return (
      <div className="select-platform">
        <h2>Select Your Platform</h2>
        <div className="platforms-container">
          <Platform
            title={'PC'}
            image={
              'http://exosphere.sphere3d.com/wp-content/uploads/2014/09/Windows_logo_Cyan_rgb_D1.png'
            }
            onClick={event => console.log(event)}
          />
          <Platform
            title={'PS4'}
            image={'http://i.imgur.com/nWSNWSc.png'}
            onClick={event => this._clickHandler(event)}
          />
          <Platform
            title={'Xbox'}
            image={'http://i.imgur.com/JJYdkHz.png'}
            onClick={event => this._clickHandler(event)}
          />
          <Platform
            title={'Switch'}
            image={'http://i.imgur.com/VTkU521.png'}
            onClick={event => this._clickHandler(event)}
          />
        </div>
        <Link to={'/region'}>
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

export default connect(mapStateToProps)(PlatformSelect);
