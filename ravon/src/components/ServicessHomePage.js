import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faPaintBrush, faLaptop, faClock } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
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
    <div className="py-6 mx-4 mt-10 lg:mx-28"> {/* Added margin */}
      <div className="mb-8 text-center">
        <h4 className="mb-4 text-lg font-semibold text-green-700">RAVON SERVICES</h4>
        <h2 className="text-2xl font-bold">We build modern creative mobile experiences.</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 transition bg-gray-200 rounded-lg shadow hover:shadow-md"
          >
            <div className="mb-3 text-3xl">{service.icon}</div>
            <h3 className="mb-1 text-lg font-semibold">{service.title}</h3>
            <p className="mb-3 text-sm text-gray-600">{service.description}</p>
            <a href="#" className="text-sm font-medium text-black">
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="text-base font-bold">Hire World-Class Developers</div>
          <button className="px-4 py-2 text-sm font-bold text-white transition bg-green-500 rounded-full hover:bg-green-600">
            Hire Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
