import React from 'react';
import { mediaDataObj } from '../../data/constant';
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
  <div className='h-16'></div>
    <h3 className='faqs faqs-heading text-center'>FAQ'S</h3>
    <div className='h-16'></div>
  </div>

    <div>
      {faqs.map((data,index)=>{
        return (
         <Accordion question={data.que} key={index} htmlContent={data.htmlContent} />
          )
      })}
    </div>
    </section>
  </>
  );
};

export default Faqs;
