import React from 'react';
import {imageObj} from '../../constant'

const Roadmap = () => {
  const {backcard,kingcard,table} = imageObj
  return( 
  <>
   <div>
    <h1>Roadmap</h1>
    <div>
    <img src={table} alt="table" />
    </div>
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <>
      <img src={kingcard} alt='card' />
      </>
      <>
      <img src={backcard} alt='card' />
      </>
      <>
      <img src={backcard} alt='card' />
      </>
      <>
      <img src={backcard} alt='card' />
      </>

    </div>
   </div>
    
  </>
  )
};

export default Roadmap;
