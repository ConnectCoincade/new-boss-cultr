import React from 'react';
import Logo from '../assets/boss-logo.png';

const Navbar = () => {
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#03001C] z-10">
      <div>
        <img
          src={Logo}
          alt="Bosscultr Logo"
          style={{ width: '50px' }}
          className="cursor-pointer"
        />
      </div>

      {/* Menu */}
      <ul className="hidden lg:flex space-x-5">
        <li className="cursor-pointer hover:font-bold font-semibold">Lore</li>
        <li className="cursor-pointer hover:font-bold font-semibold">About</li>
        <li className="cursor-pointer hover:font-bold font-semibold">
          RoadMap
        </li>
        <li className="cursor-pointer hover:font-bold font-semibold">FAQs</li>
      </ul>
    </div>
  );
};

export default Navbar;
