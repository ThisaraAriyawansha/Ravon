import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";

function Stories() {
  return (
    <div className="mb-20">
      {/* Blog Cards Section */}
<section className="relative h-full">
  {/* Half-colored background */}
  <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E6F4E7]"></div>
  
  {/* Content */}
  <div className="relative px-4 py-8 sm:px-8 sm:py-12">
    <div className="p-6 text-center sm:p-10">
      <h4 className="mb-4 text-xs font-semibold text-green-700">
        LATEST FROM BLOG
      </h4>
      <h2 className="text-lg font-bold text-gray-800 sm:text-2xl">
        Read stories, tips, and our opinions on everything
      </h2>
      <p className="mt-2 text-sm font-bold text-gray-600">
        Get updated with the latest trends in technology and know how your
        business can benefit from these technologies.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-40">
      {[
        {
          title: "Best Technology for Mobile Application Development",
          date: "12 March '21",
          readTime: "4 Min Read",
          imageUrl:
            "https://i0.wp.com/armchairarcade.com/perspectives/wp-content/uploads/2019/06/Useful-mobile-apps-to-make-your-life-easier-3.jpg?w=800&ssl=1",
        },
        {
          title: "Exploring the Key Features of Laravel 7 Framework",
          date: "12 March '21",
          readTime: "5 Min Read",
          imageUrl:
            "https://www.lifewire.com/thmb/V7d9jGfsILoaSWJKat1CjekzqH0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-994525288-a302dcd32b754ca6af1fb8427368b47d.jpg",
        },
        {
          title: "Best Technology for Mobile Application Development",
          date: "12 March '21",
          readTime: "4 Min Read",
          imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105"
        >
          <img src={item.imageUrl} alt="Blog" className="w-full" />
          <div className="p-4 sm:p-6">
            <div className="flex items-center mb-2 space-x-4 text-gray-500">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mr-2 text-green-700"
                />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2 text-green-700"
                />
                <span>{item.readTime}</span>
              </div>
            </div>
            <h3 className="mt-2 text-base font-bold text-gray-800 hover:text-green-700 sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Discover the latest advancements in technology and frameworks with
              insights from industry leaders.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}

export default Stories;