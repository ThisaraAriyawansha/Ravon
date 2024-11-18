import React from "react";
import { FaAndroid, FaApple } from 'react-icons/fa'
import { motion } from "framer-motion";

const Download = () => {


  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row p-14 ">
    {/* Left Section */}
    <motion.div
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
                <h4 className="mb-4 text-xs font-semibold text-green-700">DOWNLOAD OUR APP</h4>

      <h1 className="mb-8 text-3xl font-bold leading-snug text-gray-800 md:text-4xl">
        Download our application from App Store
      </h1>
      <p className="mt-4 mb-10 text-gray-600">
      Experience the future of innovation with RAVON. Empowering businesses worldwide,
      RAVON delivers cutting-edge digital solutions for web, mobile, and connected platforms, 
       helping you achieve more with ease.

      </p>

     

      {/* Contact Section */}
      <motion.div
        className="flex flex-col items-center mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
  <button className="flex items-center justify-center px-6 py-2 text-white rounded-full bg-gradient-to-r from-green-800 to-green-600 hover:from-green-900 hover:to-green-700">
    Play Store
    <FaAndroid className="ml-2 text-lg" />
  </button>

  {/* iOS Store Button */}
  <button className="flex items-center justify-center px-6 py-2 text-green-800 transition duration-300 border border-green-800 rounded-full hover:bg-green-800 hover:text-white">
    iOS Store
    <FaApple className="ml-2 text-lg" />
  </button>
      </motion.div>
    </motion.div>

    {/* Right Section */}
    <motion.div
        className="w-full mt-8 md:w-1/2 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative flex justify-center">
          <img
            src="/images/dribbble_plant_1-removebg-preview.png"
            alt="App Design 1"
            className="w-full rounded-lg md:w-auto"
          />
        </div>
      </motion.div>

  </div>
  );
};

export default Download;
