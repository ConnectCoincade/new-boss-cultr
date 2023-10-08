import React, { useEffect, useRef, useState } from 'react';
import './about.css';
// import {gsap} from 'gsap';
import { mediaDataObj } from '../../data/constant';
import AboutModal from './AboutModal';
import { motion } from 'framer-motion';
const About = () => {
    const {BossPicture1,BossPicture2,BossPicture3,BossPictureHover1,BossPictureHover2,BossPictureHover3, bossDetails} = mediaDataObj
    const tl = gsap.timeline();
    const [open, setOpen] = useState(false);
    const [boss, setBoss] = useState({description:"",picture:""});
   
   const handleBoss = (description,BossPicture) =>{
    setOpen(!open);
    setBoss({description:description,picture:BossPicture});
   }
    
  return (
    <>
    
        
        <h2 className='about-heading'>About Bosses</h2>
    <div className='container flex justify-between flex-row  px-6'>
            
      {
        bossDetails.map((data,index)=>{
            return(
            <>
              <div key={index} className='box px-1 m-4 border-4 rounded-xl border-silver-900 cursor-pointer' onClick={()=>handleBoss(data.description,data.BossPictureHover)}>
              <img className='image-front' src={data.BossPicture} alt="boss" />
              <img className='image-back' src={data.BossPictureHover}  alt="bossOnHover"/>
              </div>   
           </>)
        })
      }
              {/* {open &&
                 <AboutModal open={open} setOpen={setOpen} boss={boss} />
               } */}
    
    </div> 
    
   </>

    )
};

export default About;
