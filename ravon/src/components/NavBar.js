import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import HamburgerMenu from 'react-hamburger-menu'; 

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="p-4 bg-white rounded-lg shadow-lg md:p-6">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo/Brand Name (Left) */}
        <div className="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-green-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <a href="/">RAVON</a>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="items-center justify-center flex-grow hidden space-x-8 md:flex">
          <a href="/" className="text-black transition duration-300 hover:text-gray-600">Home</a>
          <a href="/aboutUs" className="text-black transition duration-300 hover:text-gray-600">About Us</a>
          <a href="/services" className="text-black transition duration-300 hover:text-gray-600">Services</a>
          <a href="/contact" className="text-black transition duration-300 hover:text-gray-600">Contact</a>
        </div>

        {/* Request Quote Button (Right) */}
        <a href="/request-quote" className="hidden px-6 py-2 text-green-800 transition duration-300 border border-green-800 rounded-full md:block hover:bg-green-800 hover:text-white">
          Request Quote
        </a>

        {/* Mobile Hamburger Menu Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <HamburgerMenu
            isOpen={isSidebarOpen}
            menuClicked={toggleSidebar}
            width={35} 
            height={25} 
            strokeWidth={4} 
            rotate={0}
            color="#006400" 
            borderRadius={0}
            animationDuration={0.3}
          />
        </div>
      </div>

      {/* Sidebar (Visible when hamburger is clicked) */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }} // Start from the right (off-screen)
          animate={{ opacity: 1, x: 0 }} // Slide in from the right
          exit={{ opacity: 0, x: 300 }} // Slide back out to the right
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 z-50 flex flex-col w-64 h-full p-6 bg-white border-l-2 border-gray-200 shadow-lg"
        >
          {/* Sidebar Links */}
          <a href="/" className="mb-6 text-lg font-semibold text-black transition duration-300 hover:text-gray-600">Home</a>
          <a href="/aboutUs" className="mb-6 text-lg font-semibold text-black transition duration-300 hover:text-gray-600">About Us</a>
          <a href="/services" className="mb-6 text-lg font-semibold text-black transition duration-300 hover:text-gray-600">Services</a>
          <a href="/contact" className="mb-6 text-lg font-semibold text-black transition duration-300 hover:text-gray-600">Contact</a>
          <a href="/request-quote" className="px-6 py-3 mb-6 font-semibold text-green-800 transition duration-300 border border-green-800 rounded-full hover:bg-green-800 hover:text-white">
            Request Quote
          </a>

          {/* Close Button */}
          <button
            onClick={closeSidebar}
            className="absolute text-4xl top-4 right-4 text-dark-green"
            style={{ color: '#006400' }} // Dark Green Color for Close Button
          >
            &times; {/* Close Icon */}
          </button>
        </motion.div>
      )}

      {/* Overlay when Sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-60" 
          onClick={closeSidebar} 
        />
      )}
    </nav>
  );
};

export default Navbar;
