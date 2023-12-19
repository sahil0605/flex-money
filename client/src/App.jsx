import { useState } from 'react'

import './App.css'
import AllRoutes from './routes/AllRoutes'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
