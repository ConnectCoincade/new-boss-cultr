import React from "react";
import './lore.css'
import Plx from "react-plx";

const Lore = () => {

  

  return (
    <>
 <div className='plx-container'>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            easing: "ease-in",
            properties: [
              {
                startValue: 1.8,
                endValue: 1,
                property: "scale"
              },
              {
                startValue: 600,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: "100vh",
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="src\assets\lore-plx-img\bosses-og.png" alt="foreground" />
      </Plx>


      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1.6,
                endValue: 1,
                property: "scale"
              },
              {
                startValue: 150,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ]}
        style={{  
          position: "absolute",
          left: 1,
          top: "100vh",
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="src\assets\lore-plx-img\Background.gif" alt="background" />
      </Plx>


      
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1.6,
                endValue: 1,
                property: "scale"
              },
              {
                startValue: 150,
                endValue: 0,
                property: "translateY"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: "100vh",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "100vw"
          }}
          src="src\assets\lore-plx-img\Midground.png"
          alt="Goonies"
        />
      </Plx>
      

    </div>  
   
    </>
  );
};

export default Lore;