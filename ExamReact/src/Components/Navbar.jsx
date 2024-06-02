import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
   <>
   
   <Link to="/">Home</Link>
   <Link to="/login">Login</Link>
   <Link to="/products">Products</Link>

   </>
  )
}

export default Navbar