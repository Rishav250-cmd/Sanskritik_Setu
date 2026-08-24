import './App.css'

 import ThreeBackground from './pages/background'
import Navbar from './pages/navbar.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Community from './pages/Community.jsx'

function App() {
  return (
    <BrowserRouter>
    <ThreeBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App