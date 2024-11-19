import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Services = () => {
  // Define your services data here
  const services = [
    {
      title: "Web Development",
      description:
        "We specialize in creating responsive, user-friendly websites tailored to your business needs.",
      iconPath: "M12 9v3m0 0v3m0-3H9m3 0h3",
    },
    {
      title: "Mobile App Development",
      description:
        "Our team builds intuitive, feature-rich mobile applications for both iOS and Android.",
      iconPath: "M16 4v16M4 12h16",
    },
    {
      title: "Custom Software Development",
      description:
        "We design scalable, secure, and high-performance software solutions tailored to your needs.",
      iconPath: "M21 12.5v-1c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h5c.28 0 .5-.22.5-.5z",
    },
    {
      title: "UI/UX Design",
      description:
        "Our design team creates stunning user interfaces and seamless experiences for web and mobile.",
      iconPath: "M3 10h18M9 21V3m6 18V3",
    },
    {
      title: "Cloud Solutions",
      description:
        "We offer robust cloud solutions to help you scale your infrastructure and ensure seamless operations in a connected world.",
      iconPath: "M4 4h16v16H4z",
    },
    {
      title: "DevOps Consulting",
      description:
        "Streamline your development and deployment processes with our DevOps expertise, ensuring efficiency and reliability.",
      iconPath: "M5 12h14M12 5v14",
    },
    {
      title: "AI and Machine Learning",
      description:
        "Leverage cutting-edge AI and ML technologies to gain insights, automate tasks, and enhance decision-making.",
      iconPath: "M9 3v18m6-18v18M4 12h16",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Build powerful online stores with secure payment gateways and seamless shopping experiences.",
      iconPath: "M3 3h18v18H3z",
    },
    {
      title: "Cybersecurity Services",
      description:
        "Protect your business with comprehensive cybersecurity solutions, including risk assessments and threat management.",
      iconPath: "M12 4v16m4-4H8",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-gray-50 to-indigo-50 lg:py-24">
        <div className="container px-4 mx-auto text-center md:px-8 lg:px-12">
          {/* Title and Description */}
          <motion.h2
            className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto mb-12 text-base text-gray-600 sm:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          >
            Ravon provides a full range of web and mobile app development services designed to meet the needs of businesses in the digital world. Our expertise ensures we deliver powerful, user-friendly solutions that drive growth.
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconPath={service.iconPath}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto text-center md:px-8 lg:px-12">
          <h2 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-base text-gray-600 sm:text-lg">
            Here’s what our satisfied customers have to say about our services.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {feedback.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.avatar}
                    alt={`${item.name}'s avatar`}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{item.comment}</p>
                <div className="flex justify-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < item.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.67a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.363 1.118l1.518 4.67c.3.921-.755 1.688-1.539 1.118l-3.978-2.89a1 1 0 00-1.175 0l-3.978 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.67a1 1 0 00-.363-1.118L2.49 9.097c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.67z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
{/* Call-to-Action */}
<div className="mt-16">
  <a
    href="/contact"
    className="px-8 py-4 text-lg font-medium text-white rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700"
  >
    Contact Us
  </a>
</div>

        </div>
        
      </section>

      <Footer />
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, iconPath }) => (
  <motion.div
    className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}
  >
    <div className="flex justify-center mb-4">
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
      </svg>
    </div>
    <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600 sm:text-base">{description}</p>
  </motion.div>
);

// Feedback Data
const feedback = [
  {
    name: "John Doe",
    comment: "Ravon delivered an amazing website that boosted our business. Highly recommend their services!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Jane Smith",
    comment: "Their mobile app development services are top-notch. Great team to work with!",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Mark Wilson",
    comment: "Highly professional and delivered before the deadline. Exceptional work!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];

export default Services;
