
import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../Types/Player-Type";
;
import PlayerCard from "./PlayerCard";

interface IAvailableProps{
    Players: IPlayer[]
    coin:number;
    setCoin:Dispatch<SetStateAction<number>>
}

const AvailablePlayers = ({ Players, coin, setCoin }: IAvailableProps) => {
//   console.log(Players, "Available Players");
  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {Players.map((Player:IPlayer, ind:number) => {
        return (
          <PlayerCard key={ind} Player={Player} coin={coin} setCoin={setCoin} ></PlayerCard>
        )
      })}
    </div>
  );
};

export default AvailablePlayers;
