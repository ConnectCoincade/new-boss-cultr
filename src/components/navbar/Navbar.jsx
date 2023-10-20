import React, {useRef, useState,useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';

const Navbar = (props) => {
  const {Logo} = mediaDataObj;
  const {scrollToSection} = props;
  const [hidden,setHidden] = useState(false);
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY,"change",(latest)=>{
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150) {
      setHidden(true);
    }else{
      setHidden(false);
    }
  })
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  return (
    <motion.nav variants={{visible:{y:0},hidden:{y:"-100%"}}} animate={hidden?"hidden":"visible"} transition={{duration:0.35,ease:"easeInOut"}} className="shadow-red-500 fixed w-full h-[50px] flex justify-between items-center px-4 bg-[stone] text-black z-10 ">
      <div  onClick={() => scrollToTop()}>
        <img
          src={Logo}
          alt="Bosscultr Logo"
          style={{ height: '30px' }}
          className=" cursor-pointer"
          
        />
      </div>

     
      {/* <button id='hamburger-button' className='text-3xl md:hidden' cursor-pointer>
      &#9776
      </button> */}
      <ul className="hidden md:flex md:item-center z-[-1] md:z-auto md:static lg:flex space-x-5 text-red-700">
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("lore")} >LORE</li>
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("about")} >ABOUT</li>
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("roadmap")} >ROADMAP</li>
        <li className="cursor-pointer font-bold text-red-600 decoration-red-600  hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection("faqs")} >FAQs</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
