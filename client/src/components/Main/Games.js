import React from 'react';


const Games = () => {
  const games = ['HearthStone', 'DoTA', 'Minecraft', 'StreetFighter', 'GTA'];

  return(
    <ul className="Games" style={{ display: 'flex', listStyle: 'none' }}>
      {games.map(item => <li style={{ flex: 1 }}>{item}</li>)}
    </ul>
  );
}

export default Games;