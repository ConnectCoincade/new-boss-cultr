import { items } from "../../data/constant2";
import React ,{useState}from "react";
import { motion } from "framer-motion";
// import './about.css';
import { mediaDataObj } from '../../data/constant';

const Card = ({ setSelected, item }) => {

  const [isHovering,setIsHovering] = useState(false)

 
  return (
    <div className="inline-block w-full mb-4">
     
     
      <motion.img
        whileHover={{
          // scale: 1.025,
          // transition: {
          //   duration: 0.2,
          // },
                   
        }}
        whileTap={{
          // scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        src={isHovering ? item.urlOnHover: item.url}
        className="shadow-slate-400 drop-shadow-xl w-full bg-base-100 shadow-xl image-full cursor-pointer box px-1 m-4 border-4 rounded-xl border-silver-900 "
        onMouseEnter={()=>setIsHovering(true)}
        onMouseLeave={()=>setIsHovering(false)}
      />
    </div>
  );
};

export default function List({ setSelected }) {
 const {bossDetails} = mediaDataObj
  return (
    <div className="">
       <h2 className='about-heading'>About Bosses</h2>
      <div className="columns-2 md:columns-3 xl:columns-4 gap-4 container flex justify-between flex-row px-6">
        {items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div> 
    </div>
  );
}