import React, { useRef, useState, useEffect } from "react";
import { mediaDataObj } from "../../data/constant";
// import './lore.css'

const Lore = () => {
  const { bossManImg, bossManVideo, Dunes } = mediaDataObj;
  
  const [muteMode, setMuteMode] = useState(
    () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  );
  
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [hasLoaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   setLoaded(true);
  //   const playbackConst = 250; // Adjust the constant as needed
  //   // Use requestAnimationFrame for smooth playback
  //   function scrollPlay() {
  //     if (videoRef.current) {
  //       const frameNumber = window.pageYOffset / playbackConst;
  //       videoRef.current.currentTime = frameNumber;
  //     }
  //     window.requestAnimationFrame(scrollPlay);
  //   }

  //   window.requestAnimationFrame(scrollPlay);
  // }, []);

  useEffect(() => {
    const video = videoRef.current;
    setLoaded(true);
    const playbackConst = 100; // Adjust the constant as needed
    // Use requestAnimationFrame for smooth playback
    function scrollPlay() {
      if (videoRef.current) {
        const frameNumber = window.pageYOffset / playbackConst;
        videoRef.current.currentTime = frameNumber;
      }
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);

    video.addEventListener("loadedmetadata", () => {
      const { duration } = video;
      // console.log('duration->', duration);
      // const playbackConst = 500;
      const scrollSection = scrollSectionRef.current;
      // console.log("scrollSection", videoRef.current.duration);
      if (videoRef?.current) {
        scrollSection.style.height = Math.floor(duration) * playbackConst + "px";
        scrollSection.style.height = "80px"
        // console.log('scrollSection.style.height->', scrollSection.style.height);
      }
      // console.log(duration); // Output: video duration in seconds
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);
  // useEffect(()=>{
  //   const handleScroll = () =>{
  //     const video =  videoRef.current;
  //     const scrollDirection = window.scrollY > 0 ? "forward" : "backward";
  //     video.playbackRate = scrollDirection === 'forward' ? 1 : -1;
  //     video.play()
  //   }
  //   window.addEventListener('scroll', handleScroll);

  //   return () =>{
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // },[])

  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   let timeout;

  //   const handleScroll = () => {
  //     if (!isScrolling) {
  //       setIsScrolling(true);

  //       // Play the video
  //       videoRef.current.play();

  //       // Clear the previous timeout, if any
  //       clearTimeout(timeout);

  //       // Set a timeout to pause the video after a short delay (e.g., 1 second)
  //       timeout = setTimeout(() => {
  //         setIsScrolling(false);
  //         videoRef.current.pause();
  //       }, 500); // Adjust the delay as needed
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     // Remove the event listener and clear the timeout when the component unmounts
  //     window.removeEventListener('scroll', handleScroll);
  //     clearTimeout(timeout);
  //   };
  // }, [isScrolling]);


  // useEffect(() => {
  //   setLoaded(true);
  //   const playbackConst = 500; // Adjust the constant as needed
  //   console.log('playbackConst->', playbackConst);
  //   // Use requestAnimationFrame for smooth playback
  //   function scrollPlay() {
  //     if (videoRef.current) {
  //       const frameNumber = window.pageYOffset / playbackConst;
  //       console.log('frameNumber->', frameNumber);
  //       videoRef.current.currentTime = frameNumber;
  //       console.log('videoRef.current.currentTime->', videoRef.current.currentTime);
  //     }
  //     window.requestAnimationFrame(scrollPlay);
  //   }

  //   window.requestAnimationFrame(scrollPlay);
  // }, []);

 
  // Attach the scroll event listener when the component mounts
  // window.addEventListener('scroll', handleScroll);
  // Clean up the event listener when the component unmounts
  // return () => {
  //   window.removeEventListener('scroll', handleScroll);
  // };

  // useEffect(() => {
  //   const video = videoRef.current;

  //   video.addEventListener("scroll", () => {
  //     const { duration } = video;
  //     const playbackConst = 2;
  //     const scrollSection = scrollSectionRef.current;
  //     // console.log("scrollSection", videoRef.current.duration);
  //     if (videoRef?.current) {
  //       scrollSection.style.height =
  //         Math.floor(duration) * playbackConst + "px";
  //     }
  //     // console.log(duration); // Output: video duration in seconds
      
  //   });
  //   video.addEventListener("loadedmetadata", () => {
  //     const { duration } = video;
  //     const playbackConst = 50;
  //     const scrollSection = scrollSectionRef.current;
  //     // console.log("scrollSection", videoRef.current.duration);
  //     if (videoRef?.current) {
  //       scrollSection.style.height =
  //         Math.floor(duration) * playbackConst + "px";
  //     }
  //     // console.log(duration); // Output: video duration in seconds
      
  //   });

  //   return () => {
  //     video.removeEventListener("loadedmetadata", () => {});
  //     // video.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  return (
    <>
      <div className="video-container">
        <video
          id="v0"
          // loop
          preload
          className="w-full"
          ref={videoRef}
          // autoPlay={true}
          // muted={muteMode}
          controlsList="nodownload"
          // playsInline={true}
          // disablePictureInPicture={true}
          controls={false}
        >
          {/* <source src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"  type="video/mp4" /> */}
          <source src={bossManVideo}  type="video/mp4" />
          {/* <source src={Dunes}  type="video/mp4" /> */}
        </video>
        <div ref={scrollSectionRef} id="scrollSection"></div>
      </div>
    </>
  );
};

export default Lore;
