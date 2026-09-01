import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/heritage', label: 'HERITAGE SITE' },
  { to: '/culture', label: 'CULTURE' },
  { to: '/community', label: 'COMMUNITY' },
  { to: '/art', label: 'ART' },
  { to: '/history', label: 'HISTORY' },
]

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white fixed top-4 left-1/2 z-50 flex w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-[1900px] -translate-x-1/2 items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center rounded-full border border-white/10 bg-black/40 px-5 py-3 sm:px-8 sm:py-4 backdrop-blur-md transition-colors hover:bg-black/60"
      >
        <span className="font-serif leading-none tracking-wide whitespace-nowrap">
          <span className="text-white">
            Sanskritik
          </span>
          <span className="ml-2 sm:ml-3   text-amber-400 italic">
            Setu
          </span>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8 rounded-full border border-white/10 bg-black/40 px-4 lg:px-8 py-3 lg:py-4 backdrop-blur-md">
        {navLinks.map(({ to, label }, i) => (
          <Link
            key={to}
            to={to}
            className={`text-xs font-semibold tracking-[0.1em] lg:tracking-[0.15em] transition-colors hover:text-white whitespace-nowrap ${
              i === 0 ? 'text-white/90' : 'text-white/70'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right side: mobile hamburger + sign in */}
      <div className="flex items-center gap-3">
        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center h-11 w-11 rounded-full border border-white/10 bg-black/40 backdrop-blur-md"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Sign in - always visible */}
        <Link
          to="/signin"
          className="flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-black/40 py-2 pl-4 sm:pl-6 pr-2 backdrop-blur-md transition-colors hover:bg-black/60"
        >
          <span className="text-xs font-semibold tracking-[0.1em] sm:tracking-[0.15em] text-white/90 whitespace-nowrap">
            SIGN IN
          </span>
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-black shrink-0">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </span>
        </Link>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="md:hidden absolute top-16 left-0 w-full flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-md">
          {navLinks.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`text-xs font-semibold tracking-[0.15em] px-3 py-3 rounded-lg transition-colors hover:bg-white/10 ${
                i === 0 ? 'text-white/90' : 'text-white/70'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

export default Navbar;