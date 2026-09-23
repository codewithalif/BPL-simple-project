// import React, { type Dispatch, type SetStateAction } from "react";
// import { TbTrash } from "react-icons/tb";
// import SelectedPlayers from "./SelectedPlayers";
// import type { IPlayer } from "../Types/Player-Type";

// interface ISelectedPlayersProps {
//   player: IPlayer;
//   selectedPlayers: IPlayer[];
//   setselectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
//   coin: number;
//   setCoin: Dispatch<SetStateAction<number>>;
// }

// const SelectedPlayerCard = ({
//   coin,
//   setCoin,
//   selectedPlayers,
//   setselectedPlayers,
// }: ISelectedPlayersProps) => {
//   const handleRemovePlayer = (player: IPlayer): void => {
//     const restPlayers = selectedPlayers.filter(
//       (selectedPlayer) => selectedPlayer.PlayerName != player.PlayerName,
//     );

//     setselectedPlayers(restPlayers);

//     const newCoinPrice = coin + player.price;
//     setCoin(newCoinPrice);
//   };
//   return (
//     <div className="grid grid-cols-1 gap-7 mt-6">
//       {selectedPlayers.map((player: IPlayer) => {
//         return (
//           <div
//             key={String(player.PlayerName)}
//             className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4"
//           >
//             <div className="flex gap-2 items-center">
//               <img
//                 src={player.Playerimg}
//                 alt=""
//                 className="h-[40px] w-[40px] rounded-[10px]  "
//               />
//               <div>
//                 <h2 className="font-bold text-2xl">{player.PlayerName}</h2>
//                 <p>{player.PlayerType}</p>
//               </div>
//             </div>
//             <span
//               className="text-red-500 font-bold cursor-pointer"
//               onClick={() => handleRemovePlayer(player)}
//             >
//               <TbTrash />
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SelectedPlayerCard;
