import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <video
          src="https://d33jl3tgfli0fm.cloudfront.net/helix/videos/hero-loop-webm.webm"
          loop
          autoPlay
          muted
        />
        <div className="overlay" />
        <div className="copy">
          <h2>Find Your Next Group</h2>
          <h3>Take the guesswork out of your next online match</h3>
          <Link to={'/platform'}>
            <button>Find a Group</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
