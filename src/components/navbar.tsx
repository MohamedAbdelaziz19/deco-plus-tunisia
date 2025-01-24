'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(true);
  };

  const closeSearch = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    if (searchVisible) {
      document.addEventListener('click', closeSearch);
    } else {
      document.removeEventListener('click', closeSearch);
    }
    return () => document.removeEventListener('click', closeSearch);
  }, [searchVisible]);

  return (
    <nav className="bg-white shadow-md px-6 md:px-16 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/image/Logo2.png" alt="Logo" width={120} height={40} className="cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-500 transition">Accueil</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 transition">À Propos</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-500 transition">Collections</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <div ref={searchRef} className="relative">
            <Search 
              className="w-6 h-6 cursor-pointer text-gray-800 hover:text-blue-500 transition" 
              onClick={toggleSearch} 
            />
            {searchVisible && (
              <input
                type="text"
                className="absolute top-8 right-0 w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none shadow-md"
                placeholder="Rechercher..."
                autoFocus
              />
            )}
          </div>

          {/* Cart Icon */}
          <ShoppingCart className="w-6 h-6 cursor-pointer text-gray-800 hover:text-blue-500 transition" />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-6">
          <ul className="flex flex-col items-center gap-6 text-gray-800 font-medium">
            <li><Link href="/" className="hover:text-blue-500 transition" onClick={toggleMenu}>Accueil</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition" onClick={toggleMenu}>À Propos</Link></li>
            <li><Link href="/products" className="hover:text-blue-500 transition" onClick={toggleMenu}>Collections</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
