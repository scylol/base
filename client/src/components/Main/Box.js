import React from 'react';

const Box = (props) => {
  return (
      <li style={styles.liStyles}>{props.text}</li>
  );
}

const styles = {
  liStyles: {
    flex: 1,
    display: 'inline-block',
    width: '20%',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    margin: 20,
    height: 70
  }
}

export default Box;