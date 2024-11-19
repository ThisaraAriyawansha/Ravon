import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { FaDesktop, FaMobileAlt, FaPaintBrush, FaCogs, FaChartLine, FaDatabase, FaRocket } from "react-icons/fa"; 

import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="py-16 about-us">
        <div className="container px-6 mx-auto md:px-12">

            
{/* About Us Section */}
<div className="items-center gap-12 px-8 mb-16 text-center md:flex md:justify-between lg:px-16"> {/* Added gap-12 */}
  {/* Left Side: Text Content */}
  <motion.div
    className="mb-8 text-center md:w-1/2 md:text-left md:mb-0"
    initial={{ opacity: 0, x: -100 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
      About Ravon
    </h1>
    <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
      Ravon is a leading Web and Mobile App Development Company that specializes in creating innovative digital solutions. Our expert team uses the latest technologies to build responsive websites, intuitive mobile applications, and custom software tailored to each business's needs. We are dedicated to delivering results that drive growth and help businesses succeed in an increasingly digital world.
    </p>
  </motion.div>

  {/* Right Side: Image */}
  <motion.div
    className="mt-12 md:w-1/2 md:mt-0" // Increased margin-top here to create more space
    initial={{ opacity: 0, y: 100 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <img
      src="https://softgalaxy.ro/images/slides/applications-development.jpg" // Replace with your image URL
      alt="About Ravon"
      className="object-cover w-full transition-all duration-700 ease-out transform rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl"
    />
  </motion.div>
</div>






                {/* Our Mission */}
                <div className="items-center p-8 mb-16 text-center md:flex md:justify-between lg:px-16">
                {/* Left Side: Image */}
                <motion.div
                    className="mb-8 md:w-1/2 md:mb-0"
                    initial={{ opacity: 0, x: -100 }} // Initial state: hidden and off-screen
                    animate={{ opacity: 1, x: 0 }} // Final state: fully visible and in position
                    transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
                    whileInView={{ opacity: 1, x: 0 }} // Triggers when the element comes into view
                    viewport={{ once: true }} // Triggers animation only once when the element comes into view
                >
                    <img
                    src="https://acropolium.com/img/articles/reduce-software-development-costs/img04.jpg" // Replace with your image URL
                    alt="Our Mission"
                    className="object-cover w-full h-full transition-transform duration-500 transform shadow-xl rounded-xl hover:scale-105"
                    />
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    className="ml-0 text-center md:ml-20 md:w-1/2 md:text-left"
                    initial={{ opacity: 0, x: 100 }} // Initial state: hidden and off-screen
                    animate={{ opacity: 1, x: 0 }} // Final state: fully visible and in position
                    transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
                    whileInView={{ opacity: 1, x: 0 }} // Triggers when the element comes into view
                    viewport={{ once: true }} // Triggers animation only once when the element comes into view
                >
                    <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900">
                    Our Mission
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
                    At Ravon, our mission is to provide cutting-edge digital solutions that empower businesses. We leverage the latest web and mobile technologies to craft engaging user experiences that foster growth and success.
                    </p>
                </motion.div>
                </div>



          {/* Our Services */}
          <div className="grid grid-cols-1 gap-8 mx-4 md:mx-20 lg:grid-cols-3 md:grid-cols-2">
    {/* Web Development */}
    <motion.div
        className="overflow-hidden text-center bg-white rounded-lg shadow-md service-item"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <div className="flex justify-center mt-6 mb-4">
            <FaDesktop className="text-5xl text-blue-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">Web Development</h3>
        <p className="px-4 mb-4 text-lg text-gray-600">
            We design and develop responsive, high-performance websites optimized for user experience, scalability, and speed.
        </p>
        <img
            src="https://kvytechnology.com/wp-content/uploads/2024/05/image-2-2.jpg"
            alt="Web Development"
            className="object-cover w-full h-64 transition-transform duration-500 transform rounded-lg shadow-lg hover:scale-105"
        />
    </motion.div>

    {/* Mobile App Development */}
    <motion.div
        className="overflow-hidden text-center bg-white rounded-lg shadow-md service-item"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <div className="flex justify-center mt-6 mb-4">
            <FaMobileAlt className="text-5xl text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">Mobile App Development</h3>
        <p className="px-4 mb-4 text-lg text-gray-600">
            Our mobile app development team delivers high-quality iOS and Android applications that are user-friendly and performant.
        </p>
        <img
            src="https://saigontechnology.com/wp-content/uploads/typical-process-for-a-successful-mobile-development.jpeg"
            alt="Mobile App Development"
            className="object-cover w-full h-64 transition-transform duration-500 transform rounded-lg shadow-lg hover:scale-105"
        />
    </motion.div>

    {/* UI/UX Design */}
    <motion.div
        className="overflow-hidden text-center bg-white rounded-lg shadow-md service-item"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <div className="flex justify-center mt-6 mb-4">
            <FaPaintBrush className="text-5xl text-orange-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">UI/UX Design</h3>
        <p className="px-4 mb-4 text-lg text-gray-600">
            We craft intuitive, user-centered designs that enhance the user experience and ensure the success of your digital products.
        </p>
        <img
            src="https://new.mobitouch.pl/wp-content/uploads/2023/09/UI-Designera_-Blog-Main.jpg"
            alt="UI/UX Design"
            className="object-cover w-full h-64 transition-transform duration-500 transform rounded-lg shadow-lg hover:scale-105"
        />
    </motion.div>
</div>





{/* STEM Sections */}
<div className="grid grid-cols-1 gap-12 p-16 mt-16 md:grid-cols-2 lg:grid-cols-4">
  {/* STEM 1: Technology Innovation */}
  <motion.div
    className="overflow-hidden text-center bg-white rounded-lg shadow-lg service-item"
    initial={{ opacity: 0, y: 100 }}  // Start below the fold (100px)
    whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
    transition={{ duration: 0.5, ease: "easeOut" }}  // Adjust transition speed
    viewport={{ once: true, amount: 0.5 }}  // Trigger when 50% of the element is in view
  >
    <div className="flex justify-center mb-6">
      <FaCogs className="text-5xl text-blue-600" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-800">Technology Innovation</h3>
    <p className="px-6 mb-6 text-lg text-gray-600">
      We focus on the latest technological advancements to build innovative solutions that drive business success.
    </p>
  </motion.div>

  {/* STEM 2: Data Analytics */}
  <motion.div
    className="overflow-hidden text-center bg-white rounded-lg shadow-lg service-item"
    initial={{ opacity: 0, y: 100 }}  // Start below the fold (100px)
    whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
    transition={{ duration: 0.5, ease: "easeOut" }}  // Adjust transition speed
    viewport={{ once: true, amount: 0.5 }}  // Trigger when 50% of the element is in view
  >
    <div className="flex justify-center mb-6">
      <FaChartLine className="text-5xl text-green-600" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-800">Data Analytics</h3>
    <p className="px-6 mb-6 text-lg text-gray-600">
      We provide data-driven insights that help businesses optimize performance and make informed decisions.
    </p>
  </motion.div>

  {/* STEM 3: Cloud Computing */}
  <motion.div
    className="overflow-hidden text-center bg-white rounded-lg shadow-lg service-item"
    initial={{ opacity: 0, y: 100 }}  // Start below the fold (100px)
    whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
    transition={{ duration: 0.5, ease: "easeOut" }}  // Adjust transition speed
    viewport={{ once: true, amount: 0.5 }}  // Trigger when 50% of the element is in view
  >
    <div className="flex justify-center mb-6">
      <FaDatabase className="text-5xl text-orange-600" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-800">Cloud Computing</h3>
    <p className="px-6 mb-6 text-lg text-gray-600">
      Our cloud-based solutions offer scalability, security, and flexibility to meet the demands of modern businesses.
    </p>
  </motion.div>

  {/* STEM 4: Automation & AI */}
  <motion.div
    className="overflow-hidden text-center bg-white rounded-lg shadow-lg service-item"
    initial={{ opacity: 0, y: 100 }}  // Start below the fold (100px)
    whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
    transition={{ duration: 0.5, ease: "easeOut" }}  // Adjust transition speed
    viewport={{ once: true, amount: 0.5 }}  // Trigger when 50% of the element is in view
  >
    <div className="flex justify-center mb-6">
      <FaRocket className="text-5xl text-red-600" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-800">Automation & AI</h3>
    <p className="px-6 mb-6 text-lg text-gray-600">
      We integrate artificial intelligence and automation to streamline processes and improve efficiency.
    </p>
  </motion.div>
</div>



          
{/* Our Vision */}
<div className="px-6 mt-16 text-center lg:px-16">
  <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, ease: "easeOut" }} 
    viewport={{ once: true, amount: 0.5 }} 
  >
<h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
Our Vision
    </h2>
    <p className="max-w-4xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-xl">
      Our vision is to be the global leader in providing innovative digital solutions that enable businesses to excel in the digital world. We aim to create experiences that push the boundaries of technology.
    </p>
  </motion.div>
</div>



{/* Contact Section */}
<div className="mt-16 text-center">
  <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, ease: "easeOut" }} 
    viewport={{ once: true, amount: 0.5 }} 
  >
<a href="#ContactUs">
    <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
        Get in Touch
    </h2>
</a>

    <p className="max-w-4xl mx-auto mt-4 text-lg text-gray-600 md:text-xl">
      Do you have a project in mind? Contact us to discuss how we can bring your ideas to life with the latest technologies and exceptional design.
    </p>
    <a
      href="/contact"
      className="motion-button-wrapper"
    >
      <motion.button
        className="px-6 py-3 mt-6 text-white bg-green-600 hover:bg-green-700 rounded-xl md:text-lg"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
      >
        Contact Us
      </motion.button>
    </a>
  </motion.div>
</div>



        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
