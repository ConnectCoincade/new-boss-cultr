import React, {useRef, useState} from 'react';
import { mediaDataObj } from '../../data/constant';

const Navbar = (props) => {
  const {Logo} = mediaDataObj;
  const {scrollToSection} = props;
//  console.log(scrollHandler);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  return (
    <div className="shadow-red-500 fixed w-full h-[50px] flex justify-between items-center px-4 bg-[stone] text-black z-10 ">
      <div  onClick={() => scrollToTop()}>
        <img
          src={Logo}
          alt="Bosscultr Logo"
          style={{ height: '60px' }}
          className=" cursor-pointer"
          
        />
      </div>

      {/* Menu */}
      <ul className="hidden lg:flex space-x-5 text-red-700">
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("lore")} >LORE</li>
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("about")} >ABOUT</li>
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("roadmap")} >ROADMAP</li>
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("faqs")} >FAQs</li>
      </ul>
    </div>
  );
};

export default Navbar;
