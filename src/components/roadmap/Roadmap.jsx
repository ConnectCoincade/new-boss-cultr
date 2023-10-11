import React, {useState} from 'react';
import {mediaDataObj} from '../../data/constant'
import './roadmap.css';
import {motion} from 'framer-motion';

const Roadmap = () => {
  const {backcard,kingcard,table, lock, kingCard1,kingCard2,kingCard3,kingCard4,cardBack1,cardBack2,cardBack3,cardBack4,cardBack5} = mediaDataObj;
   
  return( 
  <>
   <div className=''>
    <h3 className='roadmap-heading'>Roadmap</h3>

    <div className='relative'>

     <div> <img className='w-full' src={table} alt="table" /></div>

     <div className='image-card flex justify-between absolute'>

     <div className='card cursor-pointer'>
        <div className='face front'>
        <img className='card' src={cardBack5} alt='card' />
        </div>
        <div className='face back'>
        <img  className='card'  src={kingCard1} alt='' />
        </div>
      </div>
      <div className='card cursor-pointer'>
        <div className='face front'>
        <img className='card' src={cardBack5} alt='card' />
        </div>
        <div className='face back'>
        <img  className='card'  src={kingCard2} alt='' />
        </div>
      </div>
      <div className='card cursor-pointer'>
        <div className='face front'>
        <img className='card' src={cardBack5} alt='card' />
        </div>
        <div className='face back'>
        <img  className='card'  src={kingCard3} alt='' />
        </div>
      </div>
      <div className='card cursor-pointer'>
        <div className='face front'>
        <img className='card' src={cardBack5} alt='card' />
        </div>
        <div className='face back'>
        <img  className='card'  src={kingCard4} alt='' />
        </div>
      </div>

      {/* <div className='wrapper'>
      <div className='single-card cursor-pointer'>
        <div className='front-card'>
        <img className='card' src={cardBack5} alt='card' />
        </div>
        <div className="back-card">
                <div >
                    <img  className='card'  src={kingCard1} alt='' />
                </div>
        </div>
      
      </div>
      </div> */}
    
      {/* <div className='cursor-pointer relative'>
      <img className='card ' src={cardBack5} alt='card' />
      <img className='lock-img absolute' src={lock} alt='lock-img' />
      </div>

      <div className='cursor-pointer relative'>
      <img className='card' src={cardBack5} alt='card' />
      <img className='lock-img absolute' src={lock} alt='lock-img' />
      </div>

      <div className='cursor-pointer relative'>
      <img className='card' src={cardBack5} alt='card' />
      <img className='lock-img absolute' src={lock} alt='lock-img' />
      </div> */}

    </div>
    </div>
   
   </div>
    
  </>
  )
};

export default Roadmap;
