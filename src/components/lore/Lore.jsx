import React, { useRef, useState, useEffect } from "react";
import { mediaDataObj } from "../../data/constant";
import './lore.css'

const Lore = () => {
  const {  bossManVideo } = mediaDataObj;


  // const registerVideo = (bound, video) => {
	// bound = document.querySelector(bound);
	// video = document.querySelector(video);
	// const scrollVideo = ()=>{
	// 	if(video.duration) {
	// 		const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
	// 		const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
	// 		const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			
	// 		video.currentTime = video.duration * percentScrolled;
	// 	}
	// 	// requestAnimationFrame(scrollVideo);
  //       setTimeout(() => {
  //           requestAnimationFrame(scrollVideo);
  //       },350);
	// }
  //   setTimeout(() => {
  //       requestAnimationFrame(scrollVideo);
  //   }, 350);
	
  //   }

  //   useEffect(() => {
  //       registerVideo("#bound-two", "#bound-two video")
  //   },[])


  const videoRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is in the viewport, play it
          video.play();
        } else {
          // Video is out of the viewport, pause it and reset to that position      
          if (entry.boundingClientRect.top > 0) {
           
            // Scrolled above the video, pause and reset
            video.pause();
            video.currentTime = 0;
          } else if (entry.boundingClientRect.top < 0) {
            // Scrolled below the video, pause    
            video.pause();
          }
        }
      });
    }, options);

    // Start observing the video element
    observer.observe(video);

    return () => {
      // Stop observing when the component unmounts
      observer.unobserve(video);
    };
  }, []);
  

  return (
    <>
 
    <div id="bound-two" class="scroll-bound" ref={scrollContainerRef} >
		<div class="content">
 			<video muted preload autoPlay  ref={videoRef}>
         <source src={bossManVideo} type="video/mp4"/>
      </video>
		</div>
	</div>
   
      
    </>
  );
};

export default Lore;