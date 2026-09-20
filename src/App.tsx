import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Players from "./Components/Players";
import type { IPlayer } from "./Types/Player-Type";



const PlayersFetch = async():Promise<IPlayer[]> =>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
const PlayerPromise = PlayersFetch();
const [coin, setCoin] = useState(500);


  return (
    <>
      <Nav coin={coin} ></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loding...</h2>}> <Players PlayersPromise={PlayerPromise} coin={coin} setCoin= {setCoin}></Players> </Suspense>
    </>
  )
}

export default App
