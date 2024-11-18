import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faPaintBrush, faLaptop, faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger the animation only once
    threshold: 0.2,     // Trigger when 20% of the element is visible
  });

  const services = [
    {
      icon: <FontAwesomeIcon icon={faAndroid} className="text-2xl text-green-500" />,
      title: "Android Development",
      description: (
        <>
          Our software house has been recognised by <br />
          Google for outstanding android application <br />
          quality.
        </>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faApple} className="text-2xl text-gray-800" />,
      title: "iOS Development",
      description: (
        <>
          At Ravon, we offer pixel-perfect responsive <br />
          website design services built around <br />
          aesthetics and usability.
        </>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} className="text-2xl text-blue-600" />,
      title: "Hybrid App Development",
      description: (
        <>
          Ravon's product design services cover the entire <br />
          product design lifecycle, from prototyping to <br />
          a fully functional design.
        </>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faClock} className="text-2xl text-purple-600" />,
      title: "Wearable Development",
      description: (
        <>
          Increase conversions, Increase leads, Increase <br />
          sales, Increase revenue. That's digital marketing <br />
          services from Ravon.
        </>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faPaintBrush} className="text-2xl text-pink-600" />,
      title: "UI/UX Designing",
      description: (
        <>
          Our highly experienced designers comprehend <br />
          your vision and business objectives to <br />
          create amazing designs.
        </>
      ),
    },
    {
      icon: <FontAwesomeIcon icon={faLaptop} className="text-2xl text-blue-500" />,
      title: "Web App Development",
      description: (
        <>
          Our highly experienced designers comprehend <br />
          your vision and business objectives in order to <br />
          create the designs.
        </>
      ),
    },
  ];

  return (
    <motion.div
      className="py-6 mx-4 mt-10 lg:mx-28"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="mb-8 text-center">
        <h4 className="mb-4 text-lg font-semibold text-green-700">RAVON SERVICES</h4>
        <h2 className="text-2xl font-bold">We build modern creative mobile experiences.</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-4 transition bg-gray-200 rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="mb-3 text-3xl">{service.icon}</div>
            <h3 className="mb-1 text-lg font-semibold">{service.title}</h3>
            <p className="mb-3 text-sm text-gray-600">{service.description}</p>
            <a href="#" className="text-sm font-medium text-black">
              Read More &rarr;
            </a>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.9,
        }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      > 
        <div className="flex items-center justify-center space-x-2 p-14">
          <div className="text-base font-bold">Hire World-Class Developers</div>
          <motion.button
            className="px-4 py-2 text-sm font-bold text-white transition bg-green-500 rounded-full hover:bg-green-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Hire Now &rarr;
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
