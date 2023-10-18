import React from 'react'
import { Navigate, Route, Routes , useParams} from 'react-router-dom';
import { AnimatePresence,LayoutGroup } from 'framer-motion';
import Home from '../components/home/Home';
import Page404 from '../components/Page404/Page404'
import Lore from '../components/lore/Lore'
import Roadmap from '../components/roadmap/Roadmap';



const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/*' element={<Page404/>} /> */}
        <Route path='/*' element={<Navigate to='/' />} /> 
    </Routes>
  )
}

export default Routing