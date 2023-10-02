import React from 'react';
import {mediaDataObj} from '../../constant'
import './roadmap.css'

const Roadmap = () => {
  const {backcard,kingcard,table} = mediaDataObj
  return( 
  <>
   <div className='stick'>
    <h3 className='roadmap-heading'>Roadmap</h3>
    <div className='stick'>
    <img className='w-full' src={table} alt="table" />
    </div>
    <div className='image-card flex justify-evenly relative'>
      <div className='cursor-pointer'>
      <img className='card' src={kingcard} alt='card' />
      {/* <img className='card' src={backcard} alt='card' /> */}
      </div>
      <div className='cursor-pointer'>
      <img className='card' src={backcard} alt='card' />
      </div>
      <div className='cursor-pointer'>
      <img className='card' src={backcard} alt='card' />
      </div>
      <div className='cursor-pointer'>
      <img className='card' src={backcard} alt='card' />
      </div>

    </div>
   </div>
    
  </>
  )
};

export default Roadmap;
