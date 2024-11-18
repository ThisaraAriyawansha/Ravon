import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { motion } from "framer-motion";

const Portfolio = () => {
  const works = [
    {
      title: "Mobile App Development for Healthcare",
      category: "Mobile Development, HealthTech",
      image: "https://blog.cgify.com/wp-content/uploads/2020/07/healthcare_mobile_app_development.jpg",
    },
    {
      title: "E-Commerce Website Design and Development",
      category: "Web Design, UI/UX, E-Commerce",
      image: "https://cdn.prod.website-files.com/637cd9725baf8ec603cbbe98/645e4ac31ff7831f32e8b04e_ecommerce-solutions-p-1600.webp",
    },
    {
      title: "AI-Based Chatbot for Customer Support",
      category: "AI, Web Development, Customer Service",
      image: "https://cdn.prod.website-files.com/634e928d7acf0e5b9297c41b/66682c343039e2ba8ab0554a_AI%20customer%20support-p-1600.jpg",
    },
    {
      title: "Blockchain Integration for Supply Chain",
      category: "Blockchain, Web Development, Business Solutions",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*Jt4Z9emlPwOM-5jG.png",
    },
    {
      title: "AR Experience for Furniture Shopping",
      category: "AR, E-Commerce, User Experience",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c3PX33P9H_Y8x0QN0CLm9g.png",
    },
    {
      title: "IoT Solutions for Smart Homes",
      category: "IoT, Smart Homes, Automation",
      image: "https://blog.techdesign.com/wp-content/uploads/2022/08/thumbnail-3.jpg",
    },
    {
      title: "Data Analytics Dashboard for Business Intelligence",
      category: "Data Science, Analytics, Business Solutions",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*y5epQ3dPjyUwhCP0.png",
    },
    {
      title: "Custom CMS Development for Blogs",
      category: "Web Development, Content Management, CMS",
      image: "https://www.alokha.com/web-assets/img/screen/cms-development-solutions.webp",
    },
  ];

  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust for the number of items you want to scroll by
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div className="py-8 text-white bg-gradient-to-r from-green-700 via-green-800 to-green-900">
      <div className="mb-6 text-center">
        <h3 className="mt-10 text-xs text-green-400 uppercase">Quality Work</h3>
        <h2 className="text-2xl font-semibold">
          Some of our <span className="text-green-400">Finest Work</span>
        </h2>
      </div>
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-green-600 rounded-full top-1/2"
          onClick={() => handleScroll(-1)}
        >
          <FaChevronLeft size={16} />
        </button>

        {/* Scroll Container */}
        <div
          className="flex gap-4 px-4 overflow-x-auto overflow-y-hidden"
          ref={scrollContainerRef}
          style={{
            height: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {works.map((work, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[350px] bg-white text-black rounded-lg shadow-md"
            >
              <img
                src={work.image}
                alt={work.title}
                className="object-cover w-full h-40 rounded-t-lg sm:h-48"
              />
              <div className="p-3">
                <p className="text-xs text-gray-600 sm:text-sm">{work.category}</p>
                <h3 className="text-sm font-semibold sm:text-lg">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-green-600 rounded-full top-1/2"
          onClick={() => handleScroll(1)}
        >
          <FaChevronRight size={16} />
        </button>
      </div>
      <div className="flex items-center justify-center p-16 space-x-2">
        <div className="text-base font-bold">Take a look at our quality work</div>
        <motion.button
          className="px-4 py-2 text-sm font-bold text-white transition bg-green-500 rounded-full hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          View All Work &rarr;
        </motion.button>
      </div>
    </div>
  );
};

export default Portfolio;
