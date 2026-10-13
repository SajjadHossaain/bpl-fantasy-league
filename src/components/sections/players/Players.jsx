import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    return (
      <div className='container mx-auto'>
        <AvailablePlayers players={players}></AvailablePlayers>
      </div>
    );
};

export default Players;