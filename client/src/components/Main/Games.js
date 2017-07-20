import React from 'react';
import Box from './Box';

const Games = () => {
  const games = ['HearthStone', 'DoTA', 'Minecraft', 'StreetFighter', 'GTA'];

  return(
    <ul>
      {games.map(item => <li>{item}</li>)}
    </ul>
  );
}

export default Games;