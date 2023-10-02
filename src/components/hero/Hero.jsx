import React , {useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../constant';
import './hero.css'
const Hero = () => {
  const {title,hero, longVideo} = mediaDataObj;
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [muteMode, setMuteMode] = useState(
    () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  );

  const registerVideo = (bound, video) => {
    bound = document.querySelector(bound);
    video = document.querySelector(video);
    const scrollVideo = () => {
      if (video.duration) {
        const distanceFromTop =
          window.scrollY + bound.getBoundingClientRect().top;
        const rawPercentScrolled =
          (window.scrollY - distanceFromTop) /
          (bound.scrollHeight - window.innerHeight);
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

        video.currentTime = video.duration * percentScrolled;
      }
      requestAnimationFrame(scrollVideo);
    };
    requestAnimationFrame(scrollVideo);
  };

  useEffect(() => {
    registerVideo("#bound-two", "#bound-two video");
  }, []);

  // useEffect(() => {
  //   sessionStorage.setItem("isMute", true);
  //   if (isVisible) {
  //     videoRef.current.play();
  //   } else {
  //     if (videoRef.current.play) {
  //       videoRef.current.pause();
  //     }
  //   }
  // }, [isVisible]);

  return (
    <>
    <div >
      <div className='w-full'>
     <video 
         loop
         ref={videoRef}
         autoPlay={true}
         muted={muteMode}
         controlsList="nodownload"
         playsInline={true}
         disablePictureInPicture={true}
         controls={false}
         className='boss-div'
         >
      <source  src={longVideo} type="video/mp4" /> 
     </video>
     </div>
     <div id="bound-two" className="scroll-bound">
     <video
     muted 
      >
      <source src={title} type="video/mp4" />
     </video>
     </div>
   
    </div>
    </>
  );
};

export default Hero;
