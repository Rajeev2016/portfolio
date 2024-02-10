import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Project from '../pages/Project'


const CustomRoutes = () => {
  return (
  
       <Routes>      
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/skill' element={<Skills/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>

  )
}

export default CustomRoutes