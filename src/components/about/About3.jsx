import React,{ useEffect, useRef, useState }  from 'react';

import { mediaDataObj } from '../../data/constant';

const About3 = () => {
    const {BossPicture1,BossPicture2,BossPicture3,BossPictureHover1,BossPictureHover2,BossPictureHover3, bossDetails} = mediaDataObj
    const [open, setOpen] = useState(false);
    const [boss, setBoss] = useState({description:"",picture:""});
    
const handleBoss = (description,BossPicture, id) =>{
    const boss_details = document.getElementById(id)
    boss_details.style.transform = 'translateX(-200%)';
    boss_details.style.transition = 'all 1s ease-out';

    setOpen(!open);
    setBoss({description:description,picture:BossPicture});
}
   
  return (
    <div>
         
         <h2 className='about-heading'>About Bosses</h2>
    <div className='container flex justify-between flex-row  px-6' id="image-container">
            
      {
        bossDetails.map((data,index)=>{
            return(
            <>
              <div key={index} id={index} className='boss-img box px-1 m-4 border-4 rounded-xl border-silver-900 cursor-pointer' onClick={()=>handleBoss(data.description,data.BossPictureHover, index)}>
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
    </div>
  )
}

export default About3