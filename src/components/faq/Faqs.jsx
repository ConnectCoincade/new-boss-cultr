import React from 'react';
import { imageObj } from '../../constant';
import './faq.css';
import Accordion from './Accordion';
const Faqs = () => {
  const {faqs} = imageObj;

  const handleHide = (e) =>{
    console.log(e);
  }

  return (
  <>
  <section className='container'>
  <div>
    <h3 className='faqs faqs-heading'>faqs</h3>
  </div>
  <div>
    <p className='faqs faqs-facts'>The Facts</p>
  </div>
  <div>
    <p className='faqs faqs-msg'>If you don’t see your question answered below, send us a message.</p>
  </div>
  <div>
    <button className='miss-button'>what did we miss?</button>
  </div>
    <div>
      {faqs.map((data,index)=>{
        return (
         <Accordion question={data.que} answer={data.ans}  />
          )
      })}
    </div>
    </section>
  </>
  );
};

export default Faqs;
