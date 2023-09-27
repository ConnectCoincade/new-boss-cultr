import React , {useRef} from 'react';
import { imageObj } from '../../constant';

const Hero = () => {
  const {title,hero} = imageObj;
  const videoRef = useRef(null);
  return (
    <>
    <div >
      <div>
     <video autoPlay loop>
     <source src={hero} type="video/mp4" /> 
     </video>
     </div>
     <div>
     <video autoPlay loop>
      <source src={title} type="video/mp4" />
     </video>
     </div>
   
    </div>
    </>
  );
};

export default Hero;
