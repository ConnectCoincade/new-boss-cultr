import React from "react";
import { motion } from "framer-motion";
import { mediaDataObj } from "../../data/constant";
import './roadmap.css';
export default function RoadmapModal({ select, setSelect }) {

  const {closeButton} = mediaDataObj;

  if (!select) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelect(null)}
      className="modal-component fixed inset-0  backdrop-blur-sm bg-black/50 z-40 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex justify-between align-center cursor-default max-w-[950px] "
      >
        {/* <motion.div layoutId={`card-${select.id}`}>
          
        </motion.div> */}
        <motion.div
          
          initial={{
            opacity: 0,
            // x: 500,
            // y:200
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          
          className="bg-black p-5 "
        >
        
          <div className=' '>
                    <div className='flex justify-between'>  
                     <h3 className="text-5xl font-bold text-gray-600 underline decoration-red-600 hover:decoration-gray-400">Roadmap</h3>   
                     <img  onClick={() => setSelect(null)}className='w-10 mr-5 cursor-pointer' src={closeButton} alt="closeButton"/>
                     </div>
                     <div className="">
                     <p className=' text-red-500 font-bold text-lg'>{select.description}vakajksabdbajkdbabdabdabdabvakhdvakhvkavskvakvavavjkdvkadkjvsadvjavdavhjavdv</p>
                     </div>                 
                    </div>
         
        </motion.div>
      </div>
    </div>
  );
}