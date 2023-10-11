
import React ,{useState}from "react";
import { motion } from "framer-motion";
import { mediaDataObj } from '../../data/constant';
import { cardItems } from "../../data/constant2";
import './roadmap.css';
import { Fade,Bounce,Flip,Hinge,JackInTheBox,Roll,Rotate,Slide,Zoom } from "react-awesome-reveal";
// import './roadmap1.css'


const Card = ({ setSelect, item, key}) => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [open,setOpen] = useState(false)

  const handleCardClick = (selectedCard) => {

    const selectedIndex = cardItems.findIndex((item) => item.id === selectedCard.id);
    const translateXValue = "0px";
    // console.log(selectedIndex);
   
    cardItems.forEach((item, index) => {
      if (index !== selectedIndex) {
        const card = document.getElementById(item.id);
        if (card) {
          // console.log(card);
          if(!open){
            console.log(open);
            card.style.transform = `translateX(${translateXValue})`;
            card.style.transition = "all 2s ease-out";
            setTimeout(()=>{  
              card.style.display = "none"
            },100)
            
            
            setOpen(true)
          }else{
            console.log(open);
            
          
          setTimeout(()=>{  
            card.style.transform = `translateX(0%)`;
            card.style.transition = "all 2s ease-out";
            card.style.display = "block";
          },200)
          
          setOpen(false);
          // selectedCard(null);

          }
          
        }
      }
    });
       !open? setSelectedCard(item) : setSelectedCard(null);
  };

  return (
    <>
    < Fade direction="down">
 <div   
 key={key} id={item.id}
 className={`card cursor-pointer ${selectedCard === item ? 'selected' : ''}`}
 onClick = {()=>handleCardClick(item)}
 >
    <Slide >
    <div className='face front'>
    <img className='card' src={item.url} alt='card' />
    </div>
    
    <div className='face back'>
    <img onClick={() => { setSelect(item);}}  className='card'  src={item.urlOnHover} alt='' />
    
    </div>
    </Slide>
    {selectedCard && (
        <div className="details">
          <Fade direction="right">
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
          </Fade>
        </div>
      )}
  </div>
  
</Fade>
</>
  );
};

export default function RoadmapList({ setSelect }) {

    const {table} = mediaDataObj;

  return (
    <div className=""  >
        <h3 className='roadmap-heading'>Roadmap</h3>

    <div className='relative'>

     <div> <img className='w-full' src={table} alt="table" /> </div>
      
     <div className='image-card flex justify-between absolute'>
        
        {cardItems.map((item,index) => (
        
          <Card setSelect={setSelect} item={item} key={item.id} id={index}  />
         
        ))}
      </div> 
      
    </div>
    </div>
  );
}