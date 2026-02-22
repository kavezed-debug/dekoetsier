'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled?: boolean;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled: scrolledProp, currentPath = '/', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle local scroll state for consistency within Next.js pages
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use prop if provided, otherwise use local state
  const isScrolled = scrolledProp !== undefined ? scrolledProp : scrolled;

  const isHome = currentPath === '/' || currentPath === '';

  // Determine navbar styling
  const navBackground = isHome && !isScrolled && !isOpen
    ? 'bg-transparent py-6'
    : 'bg-koetsier-dark/95 backdrop-blur-sm shadow-lg py-3';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Menu', href: '/menu' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#') && isHome) {
      e.preventDefault();
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${navBackground}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex flex-col items-start group text-left"
        >
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-koetsier-cream group-hover:text-koetsier-gold transition-colors">
            DE KOETSIER
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-koetsier-gold-light">
            Loenen aan de Vecht
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm uppercase tracking-widest hover:text-koetsier-gold transition-colors duration-200 font-medium ${currentPath === link.href ? 'text-koetsier-gold' : 'text-koetsier-cream'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="border border-koetsier-gold text-koetsier-gold hover:bg-koetsier-gold hover:text-white px-5 py-2 rounded-sm text-sm uppercase tracking-widest transition-all duration-300"
          >
            Reserveer
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-koetsier-cream hover:text-koetsier-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-koetsier-panel border-t border-stone-700 shadow-xl overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-lg font-serif italic hover:text-koetsier-gold transition-colors ${currentPath === link.href ? 'text-koetsier-gold' : 'text-koetsier-cream'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-koetsier-gold text-white px-8 py-3 rounded-sm uppercase tracking-widest font-bold"
          >
            Reserveer Nu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;