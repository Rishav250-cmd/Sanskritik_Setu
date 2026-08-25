import './App.css'
 import ThreeBackground from './pages/background'
import Navbar from './pages/navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Community from './pages/Community.jsx'
import Art from './pages/Art.jsx'
import History from './pages/History.jsx'
import Culture from './pages/Culture.jsx'
import Heritage from './pages/Heritage.jsx'
import Sign from './pages/Signin.jsx'

function App() {
  return (
    <BrowserRouter>
    <ThreeBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/art" element={<Art/>} />
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/Signin" element={<Sign />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App