import React from 'react';

const Selector = props => {
  return (
    <div className="platform" onClick={props.onClick}>
      <p>
        {props.title}
      </p>
      <img src={props.image} />
    </div>
  );
};

export default Selector;
