import React from 'react';
import { FaFlag, FaUser } from "react-icons/fa";

const Card = ({ player }) => {
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
          <p>Price: $1500000</p>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;