
import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../Types/Player-Type";
;
import PlayerCard from "./PlayerCard";

interface IAvailableProps{
    Players: IPlayer[]
    coin:number;
    setCoin:Dispatch<SetStateAction<number>>
    selectedPlayers:IPlayer[];
    setselectedPlayers:Dispatch<SetStateAction<IPlayer[]>>
    
}

const AvailablePlayers = ({ Players, coin, setCoin, selectedPlayers, setselectedPlayers }: IAvailableProps) => {
//   console.log(Players, "Available Players");
  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {Players.map((Player:IPlayer, ind:number) => {
        return (
          <PlayerCard key={ind}
           Player={Player}
            coin={coin}
             setCoin={setCoin}
              selectedPlayers={selectedPlayers}
               setselectedPlayers={setselectedPlayers}
               ></PlayerCard>
        )
      })}
    </div>
  );
};

export default AvailablePlayers;
