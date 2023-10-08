import React,{useState} from 'react';
import Modal from './Modal';
import List from './List';

const About4 = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
       <List setSelected={setSelected} />
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default About4