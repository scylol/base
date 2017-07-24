import React, { Component } from "react";
import { connect } from "react-redux";
import * as Cookies from 'js-cookie';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./profilePage.css";
import { updateSliders, updateUserProfile } from "../../actions/actions";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.setSlider1Value = this.setSlider1Value.bind(this);
    this.setSlider2Value = this.setSlider2Value.bind(this);
    this.setSlider3Value = this.setSlider3Value.bind(this);
    this.setSlider4Value = this.setSlider4Value.bind(this);
    this.setSlider5Value = this.setSlider5Value.bind(this);
    this.setSlider6Value = this.setSlider6Value.bind(this);

    this.updateUserProfile = this.updateUserProfile.bind(this);
  }

  setSlider1Value(value) {
    this.props.dispatch(updateSliders(value, "slider1"));
  }
  setSlider2Value(value) {
    this.props.dispatch(updateSliders(value, "slider2"));
  }
  setSlider3Value(value) {
    this.props.dispatch(updateSliders(value, "slider3"));
  }
  setSlider4Value(value) {
    this.props.dispatch(updateSliders(value, "slider4"));
  }
  setSlider5Value(value) {
    this.props.dispatch(updateSliders(value, "slider5"));
  }
  setSlider6Value(value) {
    this.props.dispatch(updateSliders(value, "slider6"));
  }

  updateUserProfile() {
    const accessToken = Cookies.get('accessToken');
    this.props.dispatch(updateUserProfile(accessToken));
  }

  render() {
    const style = { width: 600, margin: 50 };

    return (
      <section className="main-section">
        <div className="profile-header">
          <h1>Your Profile</h1>
          <h3>Describe yourself as best as you can!</h3>
        </div>
        <div className="main-container">
          <div className="slider-container" style={style}>
            <div className="single-slider">
              <p className="leftWord">Casual</p>
              <Slider
                dots
                step={10}
                defaultValue={this.props.slider1}
                onChange={this.setSlider1Value}
              />
              <p className="rightWord">Hardcore</p>
            </div>
            <div className="single-slider">
              <p className="leftWord">SoloPlayer</p>
              <Slider
                dots
                step={10}
                defaultValue={this.props.slider2}
                onChange={this.setSlider2Value}
              />
              <p className="rightWord">TeamPlayer</p>
            </div>
            <div className="single-slider">
              <p className="leftWord">Quiet</p>
              <Slider
                dots
                step={10}
                defaultValue={this.props.slider3}
                onChange={this.setSlider3Value}
              />
              <p className="rightWord">Talkative</p>
            </div>
            <button className="save-button" onClick={this.updateUserProfile}>Save</button>
          </div>
          <div className="slider-container" style={style}>
            <div className="single-slider">
              <p className="leftWord">Calm</p>
              <Slider
                dots
                step={10}
                defaultValue={this.props.slider4}
                onChange={this.setSlider4Value}
              />
              <p className="rightWord">Passionate</p>
            </div>
            <div className="single-slider">
              <p className="leftWord">For Fun</p>
              <Slider
                dots
                step={10}
                defaultValue={this.props.slider5}
                onChange={this.setSlider5Value}
              />
              <p className="rightWord">To Win</p>
            </div>
            <div className="single-slider">
              <p className="leftWord">Student</p>
              <Slider
                dots
                step={10}
                defaultValue={this.props.slider6}
                onChange={this.setSlider6Value}
              />
              <p className="rightWord">Teacher</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  slider1: state.slider1,
  slider2: state.slider2,
  slider3: state.slider3,
  slider4: state.slider4,
  slider5: state.slider5,
  slider6: state.slider6,
});

export default connect(mapStateToProps)(ProfilePage);
