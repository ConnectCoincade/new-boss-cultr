import React, { useRef, useState, useEffect } from "react";
// import logo from "../../assets/logo.png";
// import "../home/styles.css";
// import "./boss.css";
// import { Zoom } from "react-awesome-reveal";
// import { isMobile } from "react-device-detect";
// import BossVid from "../../assets/marketing 2.mp4";
// import VisibilitySensor from "react-visibility-sensor";
import volume_up from "../../assets/volume_up.svg";
import volume_off from "../../assets/volume_off.svg";
import { imageObj } from '../../constant';

function Vid() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [muteMode, setMuteMode] = useState(
    () => JSON.parse(sessionStorage.getItem("isMute")) ?? true
  );

  const toggleVolume = () => {
    const updatedMuteMode = !muteMode;
    setMuteMode(updatedMuteMode);
    sessionStorage.setItem("isMute", updatedMuteMode);
  };

  useEffect(() => {
    sessionStorage.setItem("isMute", true);
    if (isVisible) {
      videoRef.current.play();
    } else {
      if (videoRef.current.play) {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {/* <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}> */}
          <video
            loop
            ref={videoRef}
            className="boss-video"
            autoPlay={true}
            muted={muteMode}
            controlsList="nodownload"
            playsInline={true}
            disablePictureInPicture={true}
            controls={false}
          >
            <source src={imageObj.hero} type="video/mp4" />
          </video>
        {/* </VisibilitySensor> */}

      </div>

     
    </>
  );
}
export default Vid;
