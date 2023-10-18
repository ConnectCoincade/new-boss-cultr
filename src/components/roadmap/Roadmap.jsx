import React, {useState} from 'react';
import RoadmapList from './RoadmapList';

const Roadmap = () => {
    const [select, setSelect] = useState(null);
    return (
      <div>
         <RoadmapList setSelect={setSelect} />
      </div>
    )
}

export default Roadmap