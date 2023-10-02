import React, {useRef, useState} from 'react';
import { mediaDataObj } from '../../constant';

const Navbar = (props) => {
  const {Logo} = mediaDataObj;
  const {scrollToSection} = props;
//  console.log(scrollHandler);


  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#fff] text-black z-10">
      <div onClick={()=>scrollToSection("hero")}>
        <img
          src={Logo}
          alt="Bosscultr Logo"
          style={{ height: '60px' }}
          className=" cursor-pointer"
          
        />
      </div>

      {/* Menu */}
      <ul className="hidden lg:flex space-x-5">
        <li className="cursor-pointer hover:font-bold font-semibold" onClick={()=>scrollToSection("lore")} >Lore</li>
        <li className="cursor-pointer hover:font-bold font-semibold" onClick={()=>scrollToSection("about")} >About</li>
        <li className="cursor-pointer hover:font-bold font-semibold" onClick={()=>scrollToSection("roadmap")} >RoadMap</li>
        <li className="cursor-pointer hover:font-bold font-semibold" onClick={()=>scrollToSection("faqs")} >FAQs</li>
      </ul>
    </div>
  );
};

export default Navbar;
