import Navbar from './Components/Navbar'
import AllRoutes from './Components/AllRoutes'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
      
    </>
  )
}

export default App
