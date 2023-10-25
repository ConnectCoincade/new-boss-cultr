import { items } from "../../data/constant2";
import React ,{useState}from "react";
import { motion } from "framer-motion";
import './about.css';
import { mediaDataObj } from '../../data/constant';
import { Fade} from "react-awesome-reveal";

const Card = ({ setSelected, item }) => {

  const [isHovering,setIsHovering] = useState(false)
 
  return (
    <motion.div className="inline-block w-full mb-4" >
     
     <Fade delay={200}>
      <motion.img
  
        whileTap={{
          // scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        onMouseEnter={()=>setIsHovering(true)}
        onMouseLeave={()=>setIsHovering(false)}
        src={isHovering ? item.urlOnHover: item.url}
        // className={isHovering ? ` w-full shadow-${item.color}-600  cursor-pointer px-1 m-4 border-2`: `w-full bg-base-100 image-full cursor-pointer px-1 m-4`} 
        className={`image-hover-${item.id}`}
        
      />
      </Fade>
    </motion.div>
  );
};

export default function List({ setSelected }) {
 
  return (
    <div className=""  >
      <div className='h-16'></div>
       <h2 className='about-heading text-center'>About Bosses</h2>
       <div className='h-16'></div>
      <div className="list-boss columns-2 md:columns-3 xl:columns-4 gap-4 container flex justify-between flex-col lg:flex-row px-6">
        {items.map((item) => (
          
          <Card key={item.id} setSelected={setSelected} item={item} />
          
        ))}
      </div> 
    </div>
  );
}