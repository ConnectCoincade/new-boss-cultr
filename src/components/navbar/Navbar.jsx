import React, {useRef, useState,useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import './navbar.css'

const Navbar = (props) => {
  const {Logo} = mediaDataObj;
  const {scrollToSection} = props;
  const [hidden,setHidden] = useState(false);
  const [open,setOpen]=useState(false);
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

let Links = [
  {name:"lore",nameLink:"LORE"},
  {name:"about",nameLink:"ABOUT"},
  {name:"roadmap",nameLink:"ROADMAP"},
  {name:"faqs",nameLink:"FAQS"}
]

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

      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
      <ion-icon className="decoration-red-600" name={open ? 'close':'menu'}></ion-icon>
      </div>
      {/* <ul className={`hidden md:flex md:items-center space-x-5 text-red-700 z-[-1] md:z-auto md:static lg:flex transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}> */}
      <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li className=" md:ml-8 text-xl md:my-0 my-7 cursor-pointer font-bold text-red-600 decoration-red-600 hover:text-gray-600 hover:underline hover:decoration-red-500" onClick={()=>scrollToSection(link.name)}>{link.nameLink}</li>
          ))
        }
      </ul>
    </motion.nav>
  );
};

export default Navbar;
