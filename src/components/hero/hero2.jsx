import React , {useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';
import bossChar from '../../assets/bossman.png'
import bosslogo from '../../assets/BossCultr Logo animation.mp4'
import './hero2.css'
const Hero = () => {
  const { bossManImg, bossManVideo, Dunes } = mediaDataObj;

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY->', window.scrollY);
      if(window.scrollY >= 100) {
        console.log('here 550');
        document.getElementById('vid-boss').style.display = "none"
        document.getElementById('vid-boss').pause()
      }
      else {
        document.getElementById('vid-boss').style.display = "block"
        document.getElementById('vid-boss').play()
        // setTimeout(() => {
        //   document.getElementById('vid-boss').pause()
        //   document.getElementById('vid-boss').style.display = "none"
        // }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <div class="hero-container">
        {/* <div class="box-container">
          <div class="box-top"></div>
          <div class="box-left"></div>
          <div class="box-right"></div>
          <img src={bosslogo}/>
          <video muted preload>
              <source src={bossManVideo} type="video/mp4"/>
          </video>
        </div> */}
          <video autoPlay muted preload id='vid-boss'>
              <source src={bosslogo} type="video/mp4"/>
          </video>
        
          <img id="boss-char" src={bossChar}/>
        
      </div>
    </>
  );
};

export default Hero;
