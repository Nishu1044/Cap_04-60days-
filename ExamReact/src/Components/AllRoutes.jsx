import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Card from '../Pages/Card'

const AllRoutes = () => {
  return (
    <>
    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/card/:id' element={<Card/>}/>
        
    </Routes>
    
    </>
  )
}

export default AllRoutes;