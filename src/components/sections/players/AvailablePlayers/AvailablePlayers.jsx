import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({players}) => {
    return (
        <div>
          <h1>Available Players</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => {
            return (
              <Card player={player}></Card>
            );
          })}
        </div>
      </div>
    );
};

export default AvailablePlayers;