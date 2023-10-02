import React from 'react';
import { mediaDataObj } from '../../constant';
import './faq.css';
import Accordion from './Accordion';
const Faqs = () => {
  const {faqs} = mediaDataObj;

  const handleHide = (e) =>{
    console.log(e);
  }

  return (
  <>
  <section className='container'>
  <div>
    <h3 className='faqs faqs-heading'>FAQ'S</h3>
  </div>

    <div>
      {faqs.map((data,index)=>{
        return (
         <Accordion question={data.que} answer={data.ans} key={index} />
          )
      })}
    </div>
    </section>
  </>
  );
};

export default Faqs;
