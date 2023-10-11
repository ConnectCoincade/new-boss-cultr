import React, { useState } from 'react';
import './faq.css'
import { Rotate ,Bounce, Fade} from 'react-awesome-reveal';

const Accordion = ({question,answer}) => {
    const [show, setShow] = useState(false);
  return (
    <>
    <Bounce direction='right'>
     <div className='faqs-data' >
            <button className='faqs-que' onClick={()=>setShow(!show)}>
            {question}
            {show ? <i className='fa-solid fa-chevron-up' /> : <i className='fa-solid fa-chevron-down' /> }
            </button>
            <div className='faqs-ans'>
              
             {show && <Fade direction='up'><p >{answer}</p></Fade> } 
             
            </div>
     </div>
     </Bounce>
    </>
  )
}

export default Accordion