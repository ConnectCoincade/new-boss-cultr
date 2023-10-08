import React from 'react';
import {mediaDataObj} from '../../data/constant'
import './roadmap.css'

const Roadmap = () => {
  const {backcard,kingcard,table, lock} = mediaDataObj
  return( 
  <>
   <div className=''>
    <h3 className='roadmap-heading'>Roadmap</h3>

    <div className='relative'>

     <div> <img className='w-full' src={table} alt="table" /></div>

     <div className='image-card flex justify-evenly items-center absolute'>
      <div className='wrapper'>
      <div className='single-card cursor-pointer'>
        <div className='front-card'>
        <img className='card' src={kingcard} alt='card' />
        </div>
        <div class="back-card">
                <div class="content">
                    <h2>Software Developer</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem illo harum reiciendis. Expedita ex dignissimos commodi totam laboriosam blanditiis natus!</p>
                </div>
        </div>
      
      </div>
      </div>
      <div className='cursor-pointer relative'>
      <img className='card ' src={backcard} alt='card' />
      <img className='lock-img absolute' src={lock} alt='lock-img' />
      </div>

      <div className='cursor-pointer relative'>
      <img className='card' src={backcard} alt='card' />
      <img className='lock-img absolute' src={lock} alt='lock-img' />
      </div>

      <div className='cursor-pointer relative'>
      <img className='card' src={backcard} alt='card' />
      <img className='lock-img absolute' src={lock} alt='lock-img' />
      </div>

    </div>
    </div>
   
   </div>
    
  </>
  )
};

export default Roadmap;
