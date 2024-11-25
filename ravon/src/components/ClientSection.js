import React from "react";
import { FaApple, FaAndroid, FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiFlutter, SiSwift, SiPwa } from 'react-icons/si';
import { motion } from 'framer-motion';

const ClientSection = () => {
  const technologies = [
    { name: "iOS", icon: <FaApple className="text-4xl text-green-500" /> },
    { name: "Android", icon: <FaAndroid className="text-4xl text-green-700" /> },
    { name: "Flutter", icon: <SiFlutter className="text-4xl text-blue-500" /> },
    { name: "Java", icon: <FaJava className="text-4xl text-orange-500" /> },
    { name: "React Native", icon: <FaReact className="text-4xl text-cyan-500" /> },
    { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" /> },
    { name: "Swift", icon: <SiSwift className="text-4xl text-red-500" /> },
    { name: "PWA", icon: <SiPwa className="text-4xl text-indigo-500" /> },
  ];

  const clients = [
    { name: "", logo: "./images/original-1435f2e58ee8faab8a6af0fc2e6dabac-removebg-preview.png" },
    { name: " ", logo: "./images/images-removebg-preview.png" },
    { name: " ", logo: "./images/png-clipart-jira-software-full-logo-tech-companies-removebg-preview.png" },
    { name: "", logo: "./images/download-software-logo-material-design-png_87546-removebg-preview.png" },
    { name: "", logo: "./images/tiered-logic-logo-design--removebg-preview.png" },
    { name: "", logo: "./images/istockphoto-1183358898-612x612-removebg-preview.png" },
  ];

  const testimonial = {
    quote:
      "Ravon built my startup business a great website that really helps current and potential customers get a good feel for my company.",
    description:
      "I am delighted with our new website. A1 service and design by Ravon. You can go with the Web Design Company, and I 100% recommend them to anyone. The perfect company to go to for your ideal website and digital marketing.",
    author: "Anne Fibbiyn",
    location: "Sri Lanka",
    avatars: [
      "https://img.freepik.com/premium-vector/simple-silhoeutte-mans-head_979495-99854.jpg?semt=ais_hybrid",
      "https://img.freepik.com/premium-vector/portrait-young-man-avatar-guy-social-networks-abstract-male-portrait-full-face-isolated-illustration-flat-style_276162-44.jpg?semt=ais_hybrid",
      "https://img.freepik.com/free-vector/young-boy-with-red-hair_1308-174715.jpg?semt=ais_hybrid",
      "https://img.freepik.com/free-vector/young-man-with-blue-eyes_1308-174369.jpg?semt=ais_hybrid",
      "https://img.freepik.com/premium-vector/urban-monster-fusion-street-culture-fantasy_1230457-39084.jpg?semt=ais_hybrid"
    ],
  };

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="mb-16 text-2xl font-bold text-center text-gray-800">
        Technologies we work with       
      </h2>

      {/* Technology Section with Scroll Animation */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid max-w-4xl grid-cols-4 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 transition bg-gray-200 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {tech.icon}
              <p className="mt-2 text-sm font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
<div className="p-20 mt-24 bg-gray-200">
      {/* Client Logos Section with Scroll Animation */}
      <motion.div
        className="bg-gray-200 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:flex-col md:flex-row">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="object-contain w-32 h-32"
                />
                <p className="mt-2 text-sm font-semibold text-gray-700">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonial Section with Scroll Animation */}
      <motion.div
        className="max-w-4xl mx-auto text-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="mb-4 text-2xl font-bold">
          Our clients praise us for our great results
        </h3>
        <blockquote className="mb-6 italic text-gray-600">
          "{testimonial.quote}"
        </blockquote>
        <p className="mb-8 text-gray-600">{testimonial.description}</p>
        <p className="font-semibold text-gray-800">
          {testimonial.author}, {testimonial.location}
        </p>
        <div className="flex justify-center gap-4 mt-8">
          {testimonial.avatars.map((avatar, index) => (
            <motion.img
              key={index}
              src={avatar}
              alt={`Avatar ${index}`}
              className="object-cover w-24 h-16 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default ClientSection;
