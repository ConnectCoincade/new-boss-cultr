import React , {useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';
import bossChar from '../../assets/Bossman_smoke.gif'
import bosslogo from '../../assets/BossCultr Logo animation.mp4'
import light from '../../assets/light.png'

import './hero2.css'
const Hero = () => {
  const { bossManImg, bossManVideo, Dunes } = mediaDataObj;

  useEffect(() => {
    setTimeout(() => {
      console.log('why');
      // document.getElementById('container-hero-sec').classList.remove("margin-top-hero");
      window.scrollTo(0, 0);
    }, 300);

    setTimeout(() => {
      console.log('test');
      document.getElementById('boss-char').classList.add("scroll-boss");
      
    }, 1200);


    const handleScroll = event => {
      console.log('window.scrollY->', window.scrollY);

      if(window.scrollY >= 300) {
        console.log('here 550');
        document.getElementById('vid-boss').style.display = "none"
        document.getElementById('vid-boss').pause()
      }
      else {
        document.getElementById('vid-boss').style.display = "block"
        document.getElementById('vid-boss').play()
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
          {/* <img src={light}/> */}

          <video autoPlay muted preload id='vid-boss'>
              <source src={bosslogo} type="video/mp4"/>
          </video>
        
          <img id="boss-char" src={bossChar}/>
        
      </div>
    </>
  );
};

export default Hero;
