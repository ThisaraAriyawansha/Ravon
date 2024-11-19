import React from 'react';
import Navbar from "./NavBar";
import Footer from "./Footer";
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  const googleMapsApiKey = "AIzaSyCKMNZbr0Io8Cnnxm7XJo6u5l7MppdWNhI"; 
  const center = {
    lat: 6.9271, // Latitude for Sri Lanka (example, change it to your office location)
    lng: 79.8612 // Longitude for Sri Lanka (example, change it to your office location)
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="container px-4 py-16 mx-auto md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We’d love to hear from you! Fill out the form below and our team will get in touch with you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <motion.button
              type="submit"
              className="px-8 py-4 text-lg font-medium text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {/* Google Map */}
        <div className="my-16">
          <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

{/* Map Instruction */}
<div className="p-8 mt-16 text-center rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 md:p-12">
  <p className="text-lg font-medium leading-relaxed text-gray-700 md:text-xl">
    Drag and zoom on the map to explore our office location. For better accuracy, zoom in!
  </p>
  <p className="mt-4 text-sm italic text-gray-500 md:text-base">Our office is conveniently located in the heart of Colombo, Sri Lanka.</p>
</div>


        {/* Company Contact Information */}
        <div className="my-16 text-center">
        <h3 className="text-4xl font-semibold text-center text-gray-900">Contact Information</h3>
<p className="mt-2 text-lg text-center text-gray-600">We’re here to assist you. Get in touch through the following ways:</p>

<div className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-xl">
  <div className="space-y-6">
    {/* Company Name */}
    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
      <p className="text-lg font-medium text-gray-700">Company Name:</p>
      <p className="text-lg font-semibold text-gray-900">Ravon</p>
    </div>

    {/* Address */}
    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
      <p className="text-lg font-medium text-gray-700">Address:</p>
      <p className="text-lg text-gray-900">123, Main Street, Colombo, Sri Lanka</p>
    </div>

    {/* Telephone */}
    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
      <p className="text-lg font-medium text-gray-700">Telephone:</p>
      <p className="text-lg text-gray-900">
        <a href="tel:+94123456789" className="text-gray-900 transition-all duration-300 hover:text-green-600">
          +94 123 456 789
        </a>
      </p>
    </div>

    {/* Email */}
    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
      <p className="text-lg font-medium text-gray-700">Email:</p>
      <p className="text-lg text-gray-900">
        <a href="mailto:info@ravon.lk" className="text-gray-900 transition-all duration-300 hover:text-green-600">
          info@ravon.lk
        </a>
      </p>
    </div>
  </div>

  <div className="mt-8 text-center">
    <p className="text-sm italic text-gray-600">Our team is available to assist you Monday - Friday, 9:00 AM - 6:00 PM.</p>
  </div>
</div>


          {/* Social Media Links */}
          <div className="mt-8 space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
              <FaLinkedin size={30} />
            </a>
          </div>

          {/* Business Hours */}
            <div className="p-8 mt-16 rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-green-200 md:p-12">
            <h4 className="text-2xl font-semibold text-center text-gray-900 md:text-3xl">Business Hours</h4>
            <ul className="mt-6 space-y-3 text-lg text-center text-gray-700 md:text-xl">
                <li className="transition-colors duration-300 hover:text-green-600">Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li className="transition-colors duration-300 hover:text-green-600">Saturday: 10:00 AM - 2:00 PM</li>
                <li className="transition-colors duration-300 hover:text-green-600">Sunday: Closed</li>
            </ul>
            </div>
        </div>




      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
