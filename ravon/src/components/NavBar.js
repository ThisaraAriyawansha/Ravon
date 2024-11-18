import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-2 bg-white shadow-lg md:p-4">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo/Brand Name (Left) */}
        <div className="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-green-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="/">RAVON</a>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="flex items-center justify-center flex-grow hidden space-x-8 md:flex">
          <a href="/home" className="text-black transition duration-300 hover:text-gray-600">Home</a>
          <a href="/about" className="text-black transition duration-300 hover:text-gray-600">About</a>
          <a href="/services" className="text-black transition duration-300 hover:text-gray-600">Services</a>
          <a href="/contact" className="text-black transition duration-300 hover:text-gray-600">Contact</a>
        </div>

        {/* Request Quote Button (Right) */}
        <a href="/request-quote" className="hidden px-6 py-2 text-green-800 transition duration-300 border border-green-800 rounded-full md:block hover:bg-green-800 hover:text-white">
          Request Quote
        </a>

        {/* Mobile Menu Icon and Request Quote Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Request Quote Button */}
          {!isMobileMenuOpen && (
            <a
              href="/request-quote"
              className="px-6 py-2 text-green-800 transition duration-300 border border-green-800 rounded-full hover:bg-green-800 hover:text-white"
            >
              Request Quote
            </a>
          )}
          {/* Hamburger Menu Icon */}
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 200 }} // Start from the right side
          animate={{ opacity: 1, x: 0 }} // Slide to the right side
          exit={{ opacity: 0, x: 200 }} // Slide back to the right side
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center p-4 mt-2 space-y-4 bg-white border border-gray-300 shadow-lg md:hidden rounded-l-xl" // Reduced margin, padding, and width for compactness
        >
          {/* Mobile Menu Links */}
          <a href="/home" className="text-black transition duration-300 hover:text-gray-600">Home</a>
          <a href="/about" className="text-black transition duration-300 hover:text-gray-600">About</a>
          <a href="/services" className="text-black transition duration-300 hover:text-gray-600">Services</a>
          <a href="/contact" className="text-black transition duration-300 hover:text-gray-600">Contact</a>

          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute text-3xl text-black top-4 left-4"
          >
            &times; {/* Close Icon */}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
