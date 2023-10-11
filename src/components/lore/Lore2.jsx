import React, { useEffect, useRef, useState } from "react";
import "./scrollvideo.css";
import bossLadyLogo from "../../assets/bossLady.png";
import flipped from "../../assets/finallady.mp4";
import { BrowserView, MobileView } from "react-device-detect";
import { mediaDataObj } from "../../data/constant";
// import "../home/styles.css";
// import Imgsequence from "../imgsequence/imgsequence";
function Lore2() {
  const { bossManImg, bossManVideo } = mediaDataObj;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsPlaying(true);
      videoRef.current.play();
    } else {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      // rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video ref={videoRef} controls={isPlaying} autoPlay>
      <source src={bossManVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

}
export default Lore2;
