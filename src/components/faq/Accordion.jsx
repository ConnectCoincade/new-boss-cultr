import React, { useState } from 'react';
import './faq.css'
import { Rotate ,Bounce, Fade} from 'react-awesome-reveal';

const Accordion = ({question,htmlContent}) => {
    const [show, setShow] = useState(false);
  return (
    <>
    <Fade direction='right' damping={0.1}>
     <div className='faqs-data' >
            <button className='faqs-que' onClick={()=>setShow(!show)}>
            {question}
            {show ? <i className='fa-solid fa-chevron-up' /> : <i className='fa-solid fa-chevron-down' /> }
            </button>
            <div className='faqs-ans'>
              
             {show && <Fade direction='up'>
              
            
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
                
              </Fade> } 
             
            </div>
     </div>
     </Fade>
    </>
  )
}

export default Accordion