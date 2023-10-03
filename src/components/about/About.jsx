import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import {gsap} from 'gsap';
import { mediaDataObj } from '../../constant';
import AboutModal from './AboutModal';
const About = () => {
    const {BossPicture1,BossPicture2,BossPicture3,BossPictureHover1,BossPictureHover2,BossPictureHover3, bossDetails} = mediaDataObj
    const tl = gsap.timeline();
    const [open, setOpen] = useState(false);
    const [boss, setBoss] = useState({description:"",picture:""});
    // let main = useRef(null);
    // let box1 = useRef(null);
    // let box2 = useRef(null);
    // let box3 = useRef(null);
    // let box4 = useRef(null);
    // let box5 = useRef(null);
    // let main = document.querySelector('.main');
   

// useEffect(()=>{
//     // console.log(main.current);
//     console.log(main);
//     gsap.config({
//             autoSleep: 60,
//             force3D: false,
//             nullTargetWarn: false,
//              trialWarn: false,
//             units: {left: "%", top: "%", rotation: "rad"}
//           });
//     tl.from(main.current,{
//         x:'-100%',
//         opacity:1,
//         ease:"back",
        
//     },3)
//     tl.from(box1.current,{
//         x:'-100%',
//         opacity:1,
//         ease:'back'
//     });
//     tl.from(box2,{
//         y:'100%',
//         opacity:1,
//         ease:'back'
//     });
//     tl.from(box3,{
//         y:'-100%',
//         opacity:1,
//         ease:'back'
//     })
//     tl.from(box4,{
//         y:'100%',
//         opacity:1,
//         ease:'back'
//     })
//     tl.from(box5,{
//         x:'100%',
//         opacity:1,
//         ease:'back'
//     })
// },[]);

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
              {open &&
                 <AboutModal open={open} setOpen={setOpen} boss={boss} />
               }
    
    </div> 
    
   </>

    )
};

export default About;
