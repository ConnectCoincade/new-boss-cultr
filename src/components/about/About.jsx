import React, { useEffect, useRef } from 'react';
import './about.css';
import {gsap} from 'gsap';
import { mediaDataObj } from '../../constant';
const About = () => {
    const {BossPicture1,BossPicture2,BossPicture3,BossPictureHover1,BossPictureHover2,BossPictureHover3} = mediaDataObj
    const tl = gsap.timeline();
    // let main = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let main = document.querySelector('.main');
   

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
// },[])


  return (
    <>
    <h2 className='about-heading'>About Bosses</h2>
    <div className='container flex justify-between flex-row  px-6'>
        
    <div className='box boss1 px-1 m-4 border-4 rounded-xl border-red-50 cursor-pointer'>
        <img className='image-front' src={BossPicture1} alt="boss" />     
        <img className='image-back' src={BossPictureHover1} alt="bossOnHover"/>
    </div>

    <div className='box boss2 px-1 m-4 border-4 rounded-xl border-red-50 cursor-pointer'>
    <img className='image-front'  src={BossPicture2} alt="boss" />
    <img className='image-back' src={BossPictureHover2} alt="bossOnHover"/>
    </div>
    
    <div className='box boss3 px-1 m-4 border-4 rounded-xl border-red-50 cursor-pointer'>
        <img className='image-front' src={BossPicture3} alt="boss" />
        <img className='image-back' src={BossPictureHover3} alt="bossOnHover"/>
    </div>
    
    </div>
   </>

    )
};

export default About;
