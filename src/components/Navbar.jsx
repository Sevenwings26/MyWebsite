import React, { useState } from 'react';
import { BsBorderWidth } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import sevenwings from '../assets/img-logo/sevenwings.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src={sevenwings} alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600">
              <BsBorderWidth size={24} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
