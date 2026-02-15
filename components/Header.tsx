'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow">
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between py-3">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest">
            <Link href="/bespoke" className="hover:text-neutral-600 transition">
              BESPOKE
            </Link>
            <Link href="/services" className="hover:text-neutral-600 transition">
              OUR SERVICES
            </Link>
          </div>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="FineFit Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest">
            <Link href="/heritage" className="hover:text-neutral-600 transition">
              HERITAGE
            </Link>
            <Link href="/contact" className="hover:text-neutral-600 transition">
              CONTACT
            </Link>
          </div>
          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-8 flex flex-col space-y-6 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-8 text-2xl font-bold text-neutral-700 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
            <Link href="/bespoke" className="hover:text-neutral-600 transition text-lg" onClick={() => setIsMenuOpen(false)}>
              BESPOKE
            </Link>
            <Link href="/services" className="hover:text-neutral-600 transition text-lg" onClick={() => setIsMenuOpen(false)}>
              OUR SERVICES
            </Link>
            <Link href="/heritage" className="hover:text-neutral-600 transition text-lg" onClick={() => setIsMenuOpen(false)}>
              HERITAGE
            </Link>
            <Link href="/contact" className="hover:text-neutral-600 transition text-lg" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
