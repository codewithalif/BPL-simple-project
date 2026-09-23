

import { AiFillDollarCircle } from 'react-icons/ai';
import Logo from '../assets/logo.png'
// import { useState } from 'react';

const Nav = ({coin}: {coin : number}) => {

    

    return (
        <nav className=' bg-red-400 '>
            <div className='container mx-auto flex justify-between items-center'>

        <img src={Logo} alt="" />

        <ul className='flex gap-4 items-center'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>

        <h2 className=' flex gap-1 font-bold text-3xl text-yello-300 items-center'> <AiFillDollarCircle></AiFillDollarCircle>  {coin}</h2>
            </div>
      </nav>
    );
};

export default Nav;