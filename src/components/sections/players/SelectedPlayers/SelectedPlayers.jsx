import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers,coin,setCoin }) => {
  const handleDelete = (player) => {
    const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
    setSelectedPlayers(filteredPlayers)
    setCoin(coin + player.playerPrice);
  };
  return (
    <div className="space-y-4 py-10 px-10">
      {selectedPlayers.length === 0 ? (
        <div className="flex flex-col gap-2 justify-center items-center pb-80">
          <h1 className="text-3xl font-semibold">Not Selected Players</h1>
          <p>Please select a player</p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between p-10 border rounded-2xl pb-80"
            >
              <div className="flex items-center gap-5">
                <img src={player.playerImage} alt="" className="w-20 h-20" />
                <div>
                  <h2>{player.playerName}</h2>
                  <p>{player.playerType}</p>
                </div>
              </div>
              <button onClick={() => handleDelete(player)} className="btn">
                <MdDelete></MdDelete>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;