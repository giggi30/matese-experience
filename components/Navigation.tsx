import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

import { useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Esperienza', href: '/#experience' },
    { name: 'Itinerario', href: '/#itinerary' },
    { name: 'Meteo', href: '/meteo' },
    { name: 'Pacchetti', href: '/#packages' },
    { name: 'Gruppi', href: '/#groups' },
    { name: 'Dormire', href: '/#sleep' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
            setIsOpen(false);
          }}
        >
          <Mountain className={`w-8 h-8 ${scrolled || !isHome ? 'text-brand-dark' : 'text-white'}`} />
          <span className={`text-xl font-bold font-serif ${scrolled || !isHome ? 'text-brand-dark' : 'text-white'}`}>
            Matese Experience
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:opacity-80 transition-colors ${scrolled || !isHome ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#packages"
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 ${scrolled || !isHome
              ? 'bg-brand-dark text-white hover:bg-gray-800'
              : 'bg-white text-brand-dark hover:bg-gray-100'
              }`}
          >
            Prenota Ora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled || !isHome ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center md:hidden animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-gray-800 font-medium hover:text-brand-gold w-full text-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#packages"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-brand-dark text-white rounded-full font-bold"
          >
            Prenota Ora
          </a>
        </div>
      )}
    </nav>
  );
};