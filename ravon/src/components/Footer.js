import React from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 text-gray-400 bg-black">
      <div className="container px-6 mx-auto md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 sm:gap-8">
          {/* Logo Section */}
          <div className="w-full text-center sm:text-left">
            <h1 className="mb-4 text-2xl font-bold text-white">RAVON</h1>
            <p className="mb-4">
              Overall client rating is 4.9 out<br /> of 10,000 Clients for RAVON.
            </p>
            <div className="flex justify-center mb-4 space-x-4 text-lg sm:justify-start">
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
            <button className="px-4 py-2 mt-4 text-white bg-gradient-to-r from-green-800 to-green-600 hover:from-green-900 hover:to-green-700 rounded-xl">
              Our Brochure
            </button>
          </div>

          {/* For Work Inquiry Section */}
          <div className="w-full text-center sm:text-left">
            <h3 className="mb-4 font-bold text-white">For Work Inquiry</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center sm:justify-start"><FaPhoneAlt className="mr-2" /> +94 77 123 4567</li>
              <li className="flex items-center justify-center sm:justify-start"><FaPhoneAlt className="mr-2" /> +94 77 234 5678</li>
              <li className="flex items-center justify-center sm:justify-start"><FaEnvelope className="mr-2" /> career@ravon.lk</li>
              <li className="flex items-center justify-center sm:justify-start"><FaEnvelope className="mr-2" /> info@ravon.lk</li>
              <li className="flex items-center justify-center sm:justify-start"><FaSkype className="mr-2" /> ravon-skype</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full text-center sm:text-left">
            <h3 className="mb-4 font-bold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full text-center sm:text-left">
            <h3 className="mb-4 font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Hire Dedicated Developers</li>
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>Search Engine Optimization</li>
              <li>Pay-Per-Click</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="w-full text-center sm:text-left">
            <h3 className="mb-4 font-bold text-white">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>Healthcare</li>
              <li>Education</li>
              <li>Retail</li>
              <li>Logistics</li>
              <li>Oil & Gas</li>
              <li>Music & Video</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 mt-10 text-sm text-center text-gray-500 border-t border-gray-700">
          <p>We are tracking any intention of piracy.</p>
          <p className="mt-2">
            Copyright © 2024 RAVON. All rights reserved. Template By Thisara Ariyawansha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
