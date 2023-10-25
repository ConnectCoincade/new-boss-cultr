import React from "react";
import { motion } from "framer-motion";
import { mediaDataObj } from "../../data/constant";
import { items } from "../../data/constant2";
import './about.css'
export default function Modal({ selected, setSelected }) {

  const {closeButton} = mediaDataObj;

  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 backdrop-blur-sm bg-black/50 z-20 cursor-pointer overflow-y-scroll "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex-col md:flex-row flex justify-between mx-10 my-20 px-5 cursor-default "
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <img className={`image-modal-${selected.id} max-w-[550px] backdrop-blur-xl p-5 ml-12 rounded-xl`} src={selected.urlOnHover} />
        </motion.div>
        <motion.div
          
          initial={{
            opacity: 0,
            x: 10,
            y:150
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-black p-10"
        >
          <div className='rounded-xl m-4 max-w-[950px] '>
                    <div className='flex justify-between'>  
                     <h3 className="text-2xl uppercase font-bold text-cream-600 underline decoration-red-600 hover:decoration-gray-400">{selected.title}</h3>   
                     <img  onClick={() => setSelected(null)}className='w-10 mr-5 cursor-pointer' src={closeButton} alt="closeButton"/>
                     </div>
                     <div className="para">
                    <p className='text-cream-500 font-bold text-lg py-10 '>{selected.description}</p>
                    </div>
                    </div>
      
        </motion.div>
      </div>
    </div>
  );
}