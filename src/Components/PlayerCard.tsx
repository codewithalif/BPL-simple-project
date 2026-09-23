// import { useState } from "react";
import type { IPlayer } from "../Types/Player-Type";
import { FaUser, FaBaseballBall } from "react-icons/fa";
import React, { use, useState, type Dispatch, type SetStateAction } from 'react';
import { toast } from "react-toastify";

interface IPlayerCardProps{
    Player: IPlayer
    coin:number;
    setCoin:Dispatch<SetStateAction<number>>
    selectedPlayers:IPlayer[];
    setselectedPlayers:Dispatch<SetStateAction<IPlayer[]>>
}




const PlayerCard = ({ Player, coin, setCoin,selectedPlayers, setselectedPlayers }: IPlayerCardProps) => {


    const [isSelected, setisSelected] = useState(false);


    const handleSelectPlayer = () =>{
        setisSelected(true);
        const newCoinPrice = coin - Number(Player.price);

        if(newCoinPrice >=0){
            setCoin(newCoinPrice)
            toast.success(`${Player.PlayerName}is purchased successfully`)
        }else{
            toast.error("Coin is not enough to purchase");
        }


        //Selected Players logic
        setselectedPlayers([...selectedPlayers, Player])
    }



  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={Player.Playerimg}
          alt="Player Image"
          className="h-full w-full  transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-base-100/90 px-3 py-1 text-sm font-semibold shadow">
            {Player.PlayerType}
          </span>
        </div>
      </figure>

      {/* Card Content */}
      <div className="p-5">

        {/* Name */}
        <div className="mb-4 flex items-center gap-2">
          <FaUser className="text-primary" />
          <h2 className="text-xl font-bold">
            {Player.PlayerName}
          </h2>
        </div>

        {/* Origin */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-base-content/50">
              Origin
            </p>
            <p className="font-semibold">
              {Player.origin}
            </p>
          </div>

          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {Player.PlayerType}
          </span>
        </div>

        <div className="divider my-2"></div>

        {/* Playing Style */}
        <div className="mb-5">
          <h3 className="mb-3 flex items-center gap-2 font-bold">
            <FaBaseballBall className="text-primary" />
            Playing Style
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">
                Batting
              </p>
              <p className="mt-1 text-sm font-semibold">
                {Player.battingstyle}
              </p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">
                Bowling
              </p>
              <p className="mt-1 text-sm font-semibold">
                {Player.bowlingstyle}
              </p>
            </div>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between border-t border-base-300 pt-4">
          <div>
            <p className="text-xs text-base-content/50">
              Price
            </p>
            <p className="text-2xl font-extrabold text-primary">
              ${Player.price.toLocaleString()}
            </p>
          </div>

          <button 
          onClick={() => handleSelectPlayer()}
          className={`btn btn-primary rounded-xl px-5`}
        //   disabled={isSelected === true? true : false}
          disabled={isSelected ? true : false}
          >
            
           {isSelected === true ? 'Selected' : "Choose Player"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlayerCard;

