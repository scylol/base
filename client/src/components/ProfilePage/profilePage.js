import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./profilePage.css";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1: 50,
      slider2: 50,
      slider3: 50,
      slider4: 50,
      slider5: 50,
      slider6: 50
    }
    this.setSlider1Value = this.setSlider1Value.bind(this);
    this.setSlider2Value = this.setSlider2Value.bind(this);
    this.setSlider3Value = this.setSlider3Value.bind(this);
    this.setSlider4Value = this.setSlider4Value.bind(this);
    this.setSlider5Value = this.setSlider5Value.bind(this);
    this.setSlider6Value = this.setSlider6Value.bind(this);
  }

  setSlider1Value(value) {
    this.setState({slider1: value});
    console.log(this.state)
  }
   setSlider2Value(value) {
      this.setState({slider2: value});
    console.log(this.state)
  }
   setSlider3Value(value) {
      this.setState({slider3: value});
    console.log(this.state)
  }
   setSlider4Value(value) {
     this.setState({slider4: value});
    console.log(this.state)
  }
   setSlider5Value(value) {
     this.setState({slider5: value});
    console.log(this.state)
  }
   setSlider6Value(value) {
     console.log(arguments);
     this.setState({slider6: value});
    console.log(this.state)
  }

  globalsetSliders(value,sliderName) {
    this.setState({sliderName: value});
  }

  render() {
    const style = { width: 600, margin: 50 };

    return (
      <section className='main-section'>
      <div className='profile-header'>
      <h1>Your Profile</h1>
      <h3>Describe yourself as best as you can!</h3>
      </div>
      <div className="main-container">
        <div className="slider-container" style={style}>
          <div className="single-slider">
            <p className="leftWord">Casual</p>
            <Slider dots step={10} defaultValue={50} onChange={this.setSlider1Value} />
            <p className="rightWord">Hardcore</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">SoloPlayer</p>
            <Slider dots step={10} defaultValue={50} onChange={this.setSlider2Value} />
            <p className="rightWord">TeamPlayer</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">Quiet</p>
            <Slider dots step={10} defaultValue={50} onChange={this.setSlider3Value} />
            <p className="rightWord">Talkative</p>
          </div>
          <button className="save-button">Save</button>
        </div>
        <div className="slider-container" style={style}>
          <div className="single-slider">
            <p className="leftWord">Calm</p>
            <Slider dots step={10} defaultValue={50} onChange={this.setSlider4Value} />
            <p className="rightWord">Passionate</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">For Fun</p>
            <Slider dots step={10} defaultValue={50} onChange={this.setSlider5Value} />
            <p className="rightWord">To Win</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">Student</p>
            <Slider dots step={10} defaultValue={50} onChange={this.setSlider6Value} />
            <p className="rightWord">Teacher</p>
          </div>
        </div>
      </div>
      </section>
    );
  }
}
