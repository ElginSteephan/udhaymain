import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) =>
    location.pathname === path ? 'text-blue-900 font-semibold' : 'text-slate-700'

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container flex items-center justify-between py-3">
        {/* Logo + name */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Udhay Shipping logo" className="h-9 w-auto" />
          <div className="leading-tight">
            <div className="text-base md:text-lg font-semibold text-slate-900">
              Udhay Shipping Services
            </div>
            <div className="text-[11px] md:text-xs text-slate-500">
              CHA & Customs Broker — Gandhidham
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about')}>
            About
          </Link>
          <Link to="/services" className={isActive('/services')}>
            Services
          </Link>
          <Link to="/hs-finder" className={isActive('/hs-finder')}>
            Tools
          </Link>
          <Link to="/contact" className={isActive('/contact')}>
            Contact
          </Link>
          <a href="/contact" className="btn-primary text-xs px-4 py-2">
            Get Quote
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-full border border-slate-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="container py-3 flex flex-col gap-2 text-sm">
            <Link to="/" className={isActive('/')} onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={isActive('/about')} onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/services" className={isActive('/services')} onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link to="/hs-finder" className={isActive('/hs-finder')} onClick={() => setOpen(false)}>
              Tools
            </Link>
            <Link to="/contact" className={isActive('/contact')} onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a href="/contact" className="btn-primary text-xs w-full text-center" onClick={() => setOpen(false)}>
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
