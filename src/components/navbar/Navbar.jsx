import React from 'react';
import { imageObj } from '../../constant';

const Navbar = () => {
  const {Logo} = imageObj;
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#fff] text-black z-10">
      <div>
        <img
          src={Logo}
          alt="Bosscultr Logo"
          style={{ height: '60px' }}
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
