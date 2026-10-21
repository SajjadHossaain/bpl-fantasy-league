import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({
  players,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-80">
        {players.map((player) => {
          return (
            <Card
              key={player.id}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              player={player}
              setCoin={setCoin}
              coin={coin}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;