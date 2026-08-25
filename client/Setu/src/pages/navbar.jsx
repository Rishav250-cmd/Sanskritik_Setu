import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='text-white fixed top-4 left-1/2 z-50 flex w-[calc(100%-48px)] max-w-[1900px] -translate-x-1/2 items-center justify-between'>
      <div class="mx-auto flex items-center gap-5 outline outline-white/5 rounded-bl-2xl;">
      <Link to="/">HOME</Link>
      <Link to="/heritage">HERITAGE SITE</Link>
      <Link to="/culture">CULTURE</Link>
      <Link to="/community">COMMUNITY</Link>
      <Link to="/art">ART</Link>
      <Link to="/history">HISTORY</Link></div>
      <button>
      <Link to="/signin">SIGN IN </Link></button>
    </div>
  )
}

export default Navbar