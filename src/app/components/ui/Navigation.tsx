'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact']

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AM<span className="text-red-500">.</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white uppercase text-sm tracking-wider transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation