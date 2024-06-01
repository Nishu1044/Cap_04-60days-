import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Tickets from '../pages/Tickets'
import TicketCreate from '../pages/TicketCreate'
import TicketEdit from '../pages/TicketEdit'
import TicketView from '../pages/TicketView'
import PrivateRoute from '../components/PrivateRoute'


const AllRoutes = () => {
  return (
<Routes>
 <Route path="/" element={
  <PrivateRoute>
 <Home/>
 </PrivateRoute>
  }/>

 <Route path="/about" element={<PrivateRoute><About/></PrivateRoute> }/>
 <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute> }/>
 <Route path="/login" element={<Login/> }/>
 
 <Route path="/tickets" element={<PrivateRoute><Tickets/></PrivateRoute> }/>
 <Route path="/ticket/create" element={<PrivateRoute><TicketCreate/></PrivateRoute> }/>
 <Route path="/ticket/edit/:id" element={<PrivateRoute><TicketEdit/></PrivateRoute> }/>
 <Route path="/ticket/view/:id" element={<PrivateRoute><TicketView/></PrivateRoute> }/>
</Routes>
  );
};

export default AllRoutes;



