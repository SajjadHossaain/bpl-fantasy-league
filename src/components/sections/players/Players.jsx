import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const [btnClick, setBtn] = useState("available");
  const players = use(playersPromise);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // console.log(players);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        {btnClick === "available" ? (
          <h1 className="font-bold text-3xl my-4">Available Players</h1>
        ) : (
          <h1 className="font-bold text-3xl my-4">Selected Players({selectedPlayers.length}/{players.length})</h1>
        )}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => {
              setBtn("available");
            }}
            className={`btn ${btnClick === "available" ? "bg-[#E7FE29]" : ""} font-bold text-lg rounded-l-2xl`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setBtn("selected");
            }}
            className={`btn ${btnClick === "selected" ? "bg-[#E7FE29]" : ""} font-bold text-lg rounded-r-2xl`}
          >
            Selected {selectedPlayers.length}
          </button>
        </div>
      </div>
      {btnClick === "available" ? (
        <AvailablePlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          players={players}
          setCoin={setCoin}
          coin={coin}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
