// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo/Brand Name (Left) */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
  <a href="/">RAVON</a>
</div>


        {/* Navigation Links (Centered) */}
        <div className="flex items-center justify-center flex-grow space-x-8">
          <a
            href="/home"
            className="text-black transition duration-300 hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-black transition duration-300 hover:text-gray-600"
          >
            About
          </a>
          <a
            href="/services"
            className="text-black transition duration-300 hover:text-gray-600"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-black transition duration-300 hover:text-gray-600"
          >
            Contact
          </a>
        </div>

        {/* Request Quote Button (Right) */}
        <a
        href="/request-quote"
        className="px-6 py-2 text-green-800 transition duration-300 border border-green-800 rounded-full hover:bg-green-800 hover:text-white"
        >
        Request Quote
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
