import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Lore from '../components/lore/Lore'
import Roadmap from '../components/roadmap/Roadmap'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default Routing