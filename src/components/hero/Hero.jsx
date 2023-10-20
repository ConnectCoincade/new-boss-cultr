import React , {useRef, useState, useEffect} from 'react';
import { mediaDataObj } from '../../data/constant';
import './hero.css'
const Hero = () => {
  const {title,hero, longVideo} = mediaDataObj;
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [muteMode, setMuteMode] = useState(
    () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  );



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
    </div>
    </>
  );
};

export default Hero;
