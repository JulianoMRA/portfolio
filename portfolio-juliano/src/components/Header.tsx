'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label:  'Projetos' },
    { href: '#habilidades', label:  'Habilidades' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-600">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg: px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold">
            <span className="text-white">Juliano Alencar</span>
            <span className="text-accent-primary"> | </span>
            <span className="text-gray-400 text-sm font-normal">Desenvolvedor</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(! isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-accent-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}