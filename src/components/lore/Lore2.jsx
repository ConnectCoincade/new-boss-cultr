import React, { useEffect } from "react";
import "./scrollvideo.css";
import bossLadyLogo from "../../assets/bossLady.png";
import flipped from "../../assets/finallady.mp4";
import { BrowserView, MobileView } from "react-device-detect";
import { mediaDataObj } from "../../constant";
// import "../home/styles.css";
// import Imgsequence from "../imgsequence/imgsequence";
function Lore2() {
//   const url = `https://ipfs.moralis.io:2053/ipfs/QmWHvMFrvWxkC7n6FVP8BARsRFP7zPdUFhGtbzek9nGXK8/60_`;
    const {bossManVideo} = mediaDataObj;
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
  return (
    <>
      <div className="box ">
        <div className="row-box flip">
          <div className="cell ">
            <MobileView>
              <div style={{ textAlign: "start" }}>
                {/* <Imgsequence url={url} id="bosslady" count={5} /> */}
              </div>
            </MobileView>
            {bossManVideo ? (
              <BrowserView>
                <div id="bound-two" className="scroll-bound">
                  <div className="content">
                    <video width="600" muted preload>
                      <source src={bossManVideo} type="video/webm" />
                    </video>
                  </div>
                </div>
              </BrowserView>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Lore2;
