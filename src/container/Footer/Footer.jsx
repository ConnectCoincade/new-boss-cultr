import React from "react";
import { mediaDataObj } from "../../constant";
// import discord from "../../assets/discord.png";
// import twiter from "../../assets/twiter.png";
import "./Footer.css";
// import { isMobile } from "react-device-detect";
function Footer() {
  const {logo } = mediaDataObj;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <div style={{ background: "#101010" }}>
        <div className="Footer-Col">
          <img
            src={logo}
            alt="logo"
            className="footer-logo"
            onClick={() => scrollToTop()}
          />
        </div>      
        <p className="copyrights">
          Copyright © 2023 BOSS CULTR. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
export default Footer;
