import React, { useState } from 'react';
import './faq.css'
import { Rotate ,Bounce, Fade} from 'react-awesome-reveal';

const Accordion = ({question,htmlContent,isOpen, toggleFaq}) => {
    const [show, setShow] = useState(false);
    const handleShow = (e) =>{
      setShow((prevShow) => !prevShow)
    }
  return (
    <>
    <Fade direction='right' >
     <div className='faqs-data' >
            <button className='faqs-que' onClick={toggleFaq}>
            {question}
            {isOpen ? <i className='fa-solid fa-chevron-up' /> : <i className='fa-solid fa-chevron-down' /> }
            </button>
            <div className='faqs-ans'>
              
             {isOpen && 
             <Fade >
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
              </Fade> 
              } 
             
            </div>
     </div>
     </Fade>
    </>
  )
}

export default Accordion