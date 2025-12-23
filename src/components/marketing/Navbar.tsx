'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="font-bold text-lg text-[#0a1628]">VaultX</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link
          href="#"
          className="px-4 py-2 text-sm font-medium text-white bg-[#0a1628] rounded-full"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Invest
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Prices
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Help
        </Link>
        <Link
          href="#"
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Blog
        </Link>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="#"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Log In
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0a1628] rounded-full hover:bg-[#1a2638] transition-colors"
        >
          Get Started
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 p-4">
          <div className="flex flex-col gap-2">
            <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Dashboard</Link>
            <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Invest</Link>
            <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Prices</Link>
            <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Help</Link>
            <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Blog</Link>
            <hr className="my-2" />
            <Link href="#" className="px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">Log In</Link>
            <Link href="#" className="px-4 py-2 text-sm text-white bg-[#0a1628] rounded-full text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
