import React from "react";
import Navbar from "./NavBar";
import AppDevelopmentSection from "./AppDevelopmentSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faRocket, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import ServicesHomePage from "./ServicessHomePage";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="p-4 mb-16 bg-transparent md:p-28">
        <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
          {/* Left Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 text-3xl font-bold leading-snug text-gray-800 md:text-4xl">
              Top Mobile App Development Company in Sri Lanka.
            </h1>
            <p className="mt-4 mb-10 text-gray-600">
              Reevan solves the world's biggest problems with expertise. Reevan helps
              global brands with digital products on web, mobile, and connected
              platforms.
            </p>

            {/* Stats Section */}
            <motion.div
              className="flex flex-col justify-between mt-6 mb-10 space-y-4 md:flex-row md:space-y-0 md:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Card 1 - People Icon */}
              <motion.div
                className="flex items-center w-full p-3 space-x-2 transition-all duration-300 transform rounded-lg shadow-md md:w-48 bg-gradient-to-r from-blue-100 to-blue-50 hover:shadow-lg hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-blue-200 rounded-full">
                  <FontAwesomeIcon icon={faUsers} className="text-xl" />
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">10M+</div>
                  <div className="text-xs font-medium text-gray-600">User Engagement</div>
                </div>
              </motion.div>

              {/* Card 2 - App Store Icon */}
              <motion.div
                className="flex items-center w-full p-3 space-x-2 transition-all duration-300 transform rounded-lg shadow-md md:w-48 bg-gradient-to-r from-orange-100 to-orange-50 hover:shadow-lg hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 text-orange-600 bg-orange-200 rounded-full">
                  <FontAwesomeIcon icon={faAppStore} className="text-xl" />
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">150+</div>
                  <div className="text-xs font-medium text-gray-600">Featured Apps</div>
                </div>
              </motion.div>

              {/* Card 3 - Rocket Icon */}
              <motion.div
                className="flex items-center w-full p-3 space-x-2 transition-all duration-300 transform rounded-lg shadow-md md:w-48 bg-gradient-to-r from-green-100 to-green-50 hover:shadow-lg hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 text-green-600 bg-green-200 rounded-full">
                  <FontAwesomeIcon icon={faRocket} className="text-xl" />
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">450+</div>
                  <div className="text-xs font-medium text-gray-600">Apps Published</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="flex flex-col items-center mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button className="flex items-center justify-center px-6 py-2 text-white rounded-full bg-gradient-to-r from-green-800 to-green-600 hover:from-green-900 hover:to-green-700">
                Talk to Our Expert
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src="https://cdn.create.vista.com/api/media/medium/320622086/stock-photo-pensive-diplomat-glasses-touching-face-embassy?token="
                  alt="Expert"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">Kamlesh Happy</p>
                  <p className="text-sm text-gray-600">Business Head</p>
                </div>
              </div>
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
                  src="/images/original-0e531dc7-783f-4238-a7f5-4f65e466f0c6-Photoroom.png"
                  alt="App Design 1"
                  className="w-full rounded-lg md:w-auto"
                />
              </div>
            </motion.div>

        </div>
      </div>

      <AppDevelopmentSection />
      <ServicesHomePage/>
    </div>
  );
};

export default HomePage;
