import React from 'react'
import { Exercise } from "./Exercise";
import { Home } from "./Home"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


export function Navigation() {
  return (
    <BrowserRouter>
      <nav className='py-4 text-center'>
       <Link className='px-4' to='/Home'>Inicio</Link>
       <Link to='/Exercise'>Ejercicios</Link>
      </nav>
     <Routes>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/Exercise' element={<Exercise/> }></Route>
     </Routes>
  </BrowserRouter>
  )
}


