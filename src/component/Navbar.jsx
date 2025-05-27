import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/Carscard' },
    // { name: 'Services', path: '/About' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/About' },
  ];

  return (
    <nav className={`w-full py-4 px-8 flex justify-between items-center bg-black/80 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'} z-10`}>
      <div className="text-3xl font-Audiowide tracking-tight bg-gradient-to-r  from-purple-500 to-yellow-50 bg-clip-text text-transparent">MP Cars</div>
      <div className="hidden md:flex space-x-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-300 hover:text-metallicgold font-Nunito relative group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-metallicgold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <button className="bg-[#a78bfa] text-white font-Nunito px-4 py-2 rounded-full hover:bg-[#8b5cf6] pulse-button">
          Get Started
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-metallicgold focus:outline-none p-2 rounded-md hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black/80 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-2 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-metallicgold text-lg font-Nunito px-4 py-2 rounded-md hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;