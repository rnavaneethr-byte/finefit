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
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Bar removed (phone and email) */}

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-8 text-sm tracking-widest">
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
          <div className="flex items-center space-x-8 text-sm tracking-widest">
            <Link href="/heritage" className="hover:text-neutral-600 transition">
              HERITAGE
            </Link>
            <Link href="/contact" className="hover:text-neutral-600 transition">
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
