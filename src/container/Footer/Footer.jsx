import React from "react";
import { mediaDataObj } from "../../data/constant";
// import discord from "../../assets/discord.png";
// import twiter from "../../assets/twiter.png";
import "./Footer.css";
// import { isMobile } from "react-device-detect";
function Footer() {
  const {logo,twitter,discord } = mediaDataObj;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <div className="flex flex-col m-12">
        <div className="Footer-Col">
          <img
            src={logo}
            alt="logo"
            className="footer-logo"
            onClick={() => scrollToTop()}
          />
        </div>  
        <div className="flex justify-center">
        <button
            onClick={() => window.open("https://x.com/BossCultr", "_blank")}
          className="p-3"
          >
            <img src={twitter} alt="twitter"/>
          </button>
          <button
            onClick={() => window.open("https://discord.gg/EheNFApHdh", "_blank")}
            titile="click here"
            className="p-3"
          >
            <img src={discord} alt="twitter"/>
          </button>
          </div>    
        <p className="copyrights">
          Copyright © 2023 BOSS CULTR. All Rights Reserved.
        </p>
        
      </div>
    </>
  );
}
export default Footer;
