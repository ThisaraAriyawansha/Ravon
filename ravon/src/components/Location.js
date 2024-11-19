import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaSkype, FaMapMarkerAlt } from "react-icons/fa";
import Flag from "react-world-flags";
import { motion } from "framer-motion";  // Import Framer Motion

const locations = [
  {
    name: "Sri Lanka", // Changed from India to Sri Lanka
    icon: <Flag code="LK" style={{ width: "30px", height: "20px" }} />, // Sri Lanka flag
    address: "123 Colombo Street, Colombo, Western Province, Sri Lanka 10000", // Example address for Sri Lanka
  },
  {
    name: "Australia",
    icon: <Flag code="AU" style={{ width: "30px", height: "20px" }} />, // Australia flag
    address: "Sydney Opera House, Bennelong Point, Sydney, NSW 2000, Australia", // Example address for Australia
  },
  {
    name: "UK",
    icon: <Flag code="GB" style={{ width: "30px", height: "20px" }} />, // UK flag
    address: "10 Downing Street, Westminster, London, SW1A 2AA, United Kingdom", // Example address for the UK
  },
];

const LocationCard = () => {
  const [inView, setInView] = useState(Array(locations.length).fill(false));

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const newInView = [...inView];
    
    locations.forEach((_, index) => {
      const element = document.getElementById(`location-card-${index}`);
      if (element) {
        const elementPosition = element.offsetTop + element.clientHeight;
        if (scrollPosition > elementPosition) {
          newInView[index] = true;
        } else {
          newInView[index] = false;
        }
      }
    });
    
    setInView(newInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  return (
    <div className="flex flex-wrap justify-center gap-8 mx-4 p-28">
      {locations.map((location, index) => (
        <motion.div
          key={index}
          id={`location-card-${index}`}
          className="w-full max-w-sm p-4 text-left sm:w-1/3"
          initial={{ opacity: 0, y: 50 }} // Start with invisible and below
          animate={{
            opacity: inView[index] ? 1 : 0,
            y: inView[index] ? 0 : 50, // Move up when in view
          }}
          transition={{ duration: 0.8, delay: index * 0.2 }} // Delay animations for each location
        >
          <div className="flex items-center mb-3">
            <div className="mr-2 text-3xl">{location.icon}</div>
            <h2 className="text-lg font-bold text-gray-800">{location.name}</h2>
          </div>

          <p className="mb-3 text-sm text-gray-600">{location.address}</p>

          <div className="flex gap-4 text-lg text-gray-600 justify-left">
            <a href="#" title="Location">
              <FaMapMarkerAlt className="text-2xl" />
            </a>
            <a href="tel:+1234567890" title="Phone">
              <FaPhone className="text-2xl" />
            </a>
            <a href="mailto:example@domain.com" title="Mail">
              <FaEnvelope className="text-2xl" />
            </a>
            <a href="skype:live:example" title="Skype">
              <FaSkype className="text-2xl" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LocationCard;
