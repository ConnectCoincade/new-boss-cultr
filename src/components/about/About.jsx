import React, { useEffect, useRef } from 'react';
import './about.css';
import {gsap} from 'gsap';
import { imageObj } from '../../constant';
const About = () => {
    const {boss1,boss2} = imageObj
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
{/* <div className="main" ref={el=>main = el}>
        <div className="container1"  >
            <div className="box box-top" id="box1" ref={el=>box1 = el}>
                <h4>201</h4>   
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque placeat eius aspernatur cupiditate. Quis recusandae eum quae velit nulla, earum voluptas eaque harum et modi? Fugit, ab sit. Illum quasi recusandae iure est debitis!</p>
           </div>
           <div className="box box-top" id="box3" ref={el=>box3 = el}>
               <h4>203</h4>   
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, accusantium possimus necessitatibus expedita aspernatur voluptatum. Facere quos dolorem et eos cumque magnam dolore dolor odio maxime numquam, commodi quo officia.</p>
           </div>
           <div className="box box-top" id="box5" ref={el=>box5 = el}>
               <h4>205</h4>   
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit iure, architecto odio quae asperiores corporis? Nemo aperiam nisi maxime libero modi, et omnis officia, eligendi inventore porro beatae amet.</p>
            </div>
        </div>
         <hr className="line"/>
        <div className="container2">
            <div className="box box-bottom" id="box2" ref={el=>box2 = el}>
                <h4>202</h4> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia ad ipsam blanditiis quisquam alias sit nemo cupiditate aliquam et praesentium, molestias corporis obcaecati harum modi maiores nulla? Obcaecati, nulla!</p>  
            </div>
            
            
            <div className="box box-bottom" id="box4" ref={el=>box4 = el}>
                <h4>204</h4>   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit iure, architecto odio quae asperiores corporis? Nemo aperiam nisi maxime libero modi, et omnis officia, eligendi inventore porro beatae amet.</p>
            </div>
        </div>    

    </div> */}
    <h2>About Bosses</h2>
    <div>
        <img src={boss1} alt="boss" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ab facilis officiis minus atque consequuntur, repudiandae porro vero aliquid iusto. Laboriosam tempora quidem, fugiat optio facilis iusto corrupti omnis hic?</p>
    </div>
    <div>
    <img style={{width:'38%'}} src={boss2} alt="boss" />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsam quod soluta totam quis nemo quibusdam error, beatae illum quos vitae velit pariatur tenetur quasi, at voluptas maxime sit fuga?</p>
    </div>
    <div>
        <img src={boss1} alt="boss" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero incidunt velit corrupti eius soluta tempore officiis itaque molestias eveniet, aspernatur voluptatum consequatur unde dolores. Repellat cumque laboriosam iste quidem vitae?</p>
    </div>

   </>

    )
};

export default About;
