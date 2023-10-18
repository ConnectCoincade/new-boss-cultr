
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

    if(selectedCard.unlock){
      const selectedIndex = cardItems.findIndex((item) => item.id === selectedCard.id);
      const translateXValue = "0px";
     
      cardItems.forEach((item, index) => {
        if (index !== selectedIndex) {
          const card = document.getElementById(item.id);
          if (card && !open) {
  
              card.style.transform = `translateX(${translateXValue})`;
              card.style.transition = "all 2s ease-out";
              setTimeout(()=>{  
                card.style.display = "none"
              },100);
              setOpen(true);
            
          }else{
            
            setTimeout(()=>{  
              card.style.transform = `translateX(0%)`;
              card.style.transition = "all 2s ease-out";
              card.style.display = "block";
            },200);
            setOpen(false);
          }
        }
      });
         !open? setSelectedCard(item) : setSelectedCard(null);
    }else{

    }

    
  };

  return (
    <>
    < Fade direction="up">
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
    <img onClick={() => { setSelect(item)}}  className='card'  src={item.urlOnHover} alt='' />
    
    </div>
    </Slide>


    {selectedCard && (
      <Fade direction="right">
        <div className="details shadow-2xl shadow-red-600 p-11 ">
          
          <h2 className='text-3xl font-bold py-5 text-black-600'>{selectedCard.title}</h2>
         <p className='text-lg text-gray-600' dangerouslySetInnerHTML={{ __html: selectedCard.description }}/>
          
        </div>
        </Fade>
      )}
  </div>
  
</Fade>
</>
  );
};

export default function RoadmapList({ setSelect }) {

    const {table} = mediaDataObj;

    // const handleCardClick = (selectedCard) => {

    //     const selectedIndex = cardItems.findIndex((item) => item.id === selectedCard.id);
    //     const translateXValue = "0px";
       
    //     cardItems.forEach((item, index) => {
    //       if (index !== selectedIndex) {
    //         const card = document.getElementById(item.id);
           
    
    //             card.style.transform = `translateX(${translateXValue})`;
    //             card.style.transition = "all 2s ease-out";
    //             setTimeout(()=>{  
    //               card.style.display = "none"
    //             },100);
                  
    //           }})
    //         }

           

  return (
    <div className="roadmaplist" onClick={() => handleCardClick(cardItems[0])} >
        <h3 className='roadmap-heading'>Roadmap</h3>

    <div className='relative'>

     <div> <img className='w-full' src={table} alt="table" /> </div>
      
     <div className='image-card flex justify-between absolute'>
        
        {cardItems.map((item,index) => (
        
          <Card setSelect={setSelect} item={item} key={item.id} id={index}/>
         
        ))}
      </div> 
      
    </div>
    </div>
  );
}