import React, { useRef, useState, useEffect } from "react";
import { mediaDataObj } from "../../data/constant";
import vid from "../../assets/vid6.mp4"

import './lore.css'

const Lore = () => {
  const { bossManImg, bossManVideo, Dunes } = mediaDataObj;


  const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			
			video.currentTime = video.duration * percentScrolled;
		}
		// requestAnimationFrame(scrollVideo);
        setTimeout(() => {
            requestAnimationFrame(scrollVideo);
        },350);
	}
    setTimeout(() => {
        requestAnimationFrame(scrollVideo);
    }, 350);
	
    }

    useEffect(() => {
        registerVideo("#bound-two", "#bound-two video")
    },[])
  

  return (
    <>
 
    <div id="bound-two" class="scroll-bound">
		<div class="content">
 			<video muted preload>
                <source src={bossManVideo} type="video/mp4"/>
            </video>
		</div>
	</div>
   
      
    </>
  );
};

export default Lore;
