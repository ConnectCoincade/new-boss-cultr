import React from "react";
import { motion } from "framer-motion";
import { mediaDataObj } from "../../data/constant";

export default function Modal({ selected, setSelected }) {

  const {closeButton} = mediaDataObj;

  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-40 cursor-pointer overflow-y-scroll "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex justify-between mx-10 my-20 px-10 cursor-default "
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <img className='max-w-[550px] backdrop-blur-xl  p-5 ml-12 rounded-xl border-2 border-red-600 ' src={selected.urlOnHover} />
          {/* <div className='backdrop-blur-lg inline-flex justify-between' >
                    <div  >
                    <img className='backdrop-blur-xl border-2 p-10 w-3/4 ml-12 rounded-xl m-8 border-red-50' src={selected.urlOnHover} alt="Boss" />
                    </div>
                    <div className=' rounded-xl p-12  m-4 '>
                    <div className='flex justify-between'>  
                     <h3 className="text-5xl font-bold text-gray-600 underline decoration-red-600 hover:decoration-gray-400">Description</h3>   
                     
                     </div>
                    <p className=' text-red-500 font-bold text-lg py-10 '>{selected.description}</p>
                   
                    </div>
                </div> */}
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
          {/* <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
          <h3 className="text-5xl font-bold text-gray-600 underline decoration-red-600 hover:decoration-gray-400">Description</h3>
          <p className=' text-red-500 font-bold text-lg py-10 '>{selected.description}</p> */}
          <div className='rounded-xl m-4 max-w-[950px] '>
                    <div className='flex justify-between'>  
                     <h3 className="text-5xl font-bold text-gray-600 underline decoration-red-600 hover:decoration-gray-400">Description</h3>   
                     <img  onClick={() => setSelected(null)}className='w-10 mr-5 cursor-pointer' src={closeButton} alt="closeButton"/>
                     </div>
                    <p className=' text-red-500 font-bold text-lg py-10 '>{selected.description}</p>
                   
                    </div>
          {/* {selected.tags.map((tag) => {
            return (
              <div
                className="badge bg-base-300 border-none text-zinc-600 mr-1 mb-1"
                key={tag}
              >
                {tag}
              </div>
            );
          })} */}
            {/* <div className='backdrop-blur-lg inline-flex justify-between' >
                    <div  >
                    <img className='backdrop-blur-xl border-2 p-10 w-3/4 ml-12 rounded-xl m-8 border-red-50' src={selected.urlOnHover} alt="Boss" />
                    </div>
                    <div className=' rounded-xl p-12  m-4 '>
                    <div className='flex justify-between'>  
                     <h3 className="text-5xl font-bold text-gray-600 underline decoration-red-600 hover:decoration-gray-400">Description</h3>   
                     <img onClick={()=>setOpen(false)} className='w-10 mr-5' src={closeButton} alt="closeButton"/>
                     </div>
                    <p className=' text-red-500 font-bold text-lg py-10 '>{selected.description}</p>
                   
                    </div>
                </div> */}
          {/* <p className="my-4">{selected.description}</p> */}
          {/* <button className="btn btn-primary btn-block">Download</button> */}
        </motion.div>
      </div>
    </div>
  );
}