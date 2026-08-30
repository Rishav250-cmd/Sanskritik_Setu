import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/community">COMMUNITY</Link>
      <Link to="/Heritage">HERITAGE SITES</Link>

    </div>
  )
}

export default Navbar