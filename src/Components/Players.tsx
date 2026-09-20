
import React, { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../Types/Player-Type';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps{
    PlayersPromise:Promise<IPlayer[]>
    coin:number;
    setCoin:Dispatch<SetStateAction<number>> ;
}

const Players = ({PlayersPromise, coin, setCoin }:PlayersProps) => {
    const Players = use(PlayersPromise)

    const [buttonType, setbuttonType] = useState("available") // available or selected

    // console.log(buttonType);

    const handleUpdateBtnType = (type: "available" | "selected") =>{
        setbuttonType(type);
    }
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-xl'>{buttonType === "available"?'Available Players': "Selected Players"}</h2>

                <div>
                    <button 
                    onClick={() =>handleUpdateBtnType("available")}
                    className={`btn btn-success ${buttonType === "available" ? 'btn-success' : "btn-ghost bg-base-200" }  rounded-r-none`}>Available</button>
                    <button 
                    onClick={() =>handleUpdateBtnType("selected")}
                    className={`btn btn-success ${buttonType === "selected" ? 'btn-success' : "btn-ghost bg-base-200" }  rounded-l-none`}>Selected</button>
                </div>
            </div>


           { buttonType === "available"? <AvailablePlayers Players={Players} coin={coin} setCoin= {setCoin} ></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;