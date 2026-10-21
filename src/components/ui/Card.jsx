import React, { useState } from 'react';
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';


const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.playerPrice;
    if (newCoin >= 0) {
      setCoin(coin - player.playerPrice);
    } else {
      toast("Not Enough Money");
      return;
    }
    toast("Players is Selected");
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers,player]);
  };
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="w-full aspect-[3/2] object-cover"
          src={player.playerImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {" "}
          <FaUser /> {player.playerName}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaFlag></FaFlag>
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn">{player.playerType}</button>
        </div>
        <div className="divider"></div>
        <h3 className="font-semibold">{player.rating}</h3>
        <div className="flex justify-between font-semibold">
          <p>{player.battingStyle}</p>
          <p className="text-right">L{player.bowlingStyle}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>${player.playerPrice}</p>
          <button
            onClick={handleChoosePlayer}
            disabled={isSelected ? true : false}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;