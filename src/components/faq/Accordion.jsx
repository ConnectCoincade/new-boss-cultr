import React, { useState } from 'react';
import './faq.css'

const Accordion = ({question,answer}) => {
    const [show, setShow] = useState(false);
  return (
    <>
     <div className='faqs-data' >
            <button className='faqs-que' onClick={()=>setShow(!show)}>
            {question}
            {show ? <i className='fa-solid fa-chevron-up' /> : <i className='fa-solid fa-chevron-down' /> }
            </button>
            <div className='faqs-ans'>
             {show && <p >{answer}</p> } 
            </div>
     </div>
    </>
  )
}

export default Accordion