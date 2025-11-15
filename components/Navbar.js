'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo1.png"
              alt="Explore The City Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            {/* <span className="text-2xl font-bold text-white lowercase">explorethecity.in</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
              Home
            </Link>
            <Link href="/cities" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
              Destinations
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
              Blog
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-orange-600">
            <Link
              href="/"
              className="block py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/cities"
              className="block py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="/blog"
              className="block py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
