import React, {useState} from 'react';
import RoadmapList from './RoadmapList';
import RoadmapModal from './RoadmapModal';

const Roadmap1 = () => {
    const [select, setSelect] = useState(null);
    return (
      <div>
         <RoadmapList setSelect={setSelect} />
        {/* <RoadmapModal select={select} setSelect={setSelect} /> */}
      </div>
    )
}

export default Roadmap1