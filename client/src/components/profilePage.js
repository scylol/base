import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./profilePage.css";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = { width: 600, margin: 50 };

    return (
      <div className="main-container">
        <div className="slider-container" style={style}>
          <div className="single-slider">
            <p className="leftWord">Casual</p>
            <Slider dots step={10} defaultValue={50} />
            <p className="rightWord">Hardcore</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">SoloPlayer</p>
            <Slider dots step={10} defaultValue={50} />
            <p className="rightWord">TeamPlayer</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">Quiet</p>
            <Slider dots step={10} defaultValue={50} />
            <p className="rightWord">Talkative</p>
          </div>
        </div>
        <div className="slider-container" style={style}>
          <div className="single-slider">
            <p className="leftWord">Calm</p>
            <Slider dots step={10} defaultValue={50} />
            <p className="rightWord">Passionate</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">For Fun</p>
            <Slider dots step={10} defaultValue={50} />
            <p className="rightWord">To Win</p>
          </div>
          <div className="single-slider">
            <p className="leftWord">Casual</p>
            <Slider dots step={10} defaultValue={50} />
            <p className="rightWord">Hardcore</p>
          </div>
        </div>
      </div>
    );
  }
}
