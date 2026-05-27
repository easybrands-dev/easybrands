'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Brand', href: '/brand' },
  { label: 'Website', href: '/website' },
  { label: 'Print', href: '/print' },
  { label: 'Projects', href: '/projects' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="w-full px-4 h-18 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image src="/logo.webp" alt="Easy Brands" width={160} height={40} className="h-9 w-auto md:h-12" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[.8em] text-eb-600/70 font-bold uppercase hover:text-eb-accent transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact">Let&apos;s Start</Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-6 bg-eb-600 rounded-full transition-transform duration-300 ${menuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-eb-600 rounded-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-eb-600 rounded-full transition-transform duration-300 ${menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-eb-50 border-t border-eb-text/10 px-5 py-6 flex flex-col gap-5 items-end shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase text-eb-text font-medium hover:text-eb-accent transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="self-end mt-2 px-6 py-3 bg-eb-400 text-white font-medium text-sm uppercase rounded-[8px] hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Start
          </Link>
        </nav>
      )}
    </header>
  )
}
