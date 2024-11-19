import React from "react";
import { FaPhone, FaEnvelope, FaSkype, FaMapMarkerAlt } from "react-icons/fa";
import Flag from "react-world-flags";

const locations = [
  {
    name: "India",
    icon: <Flag code="IN" style={{ width: "30px", height: "20px" }} />,
    address: "Tom Extension, 1st Block 2nd Cross, Yellow round circle, Jaipur, Rajasthan 123456",
  },
  {
    name: "Dubai",
    icon: <Flag code="AE" style={{ width: "30px", height: "20px" }} />,
    address: "Tom Extension, 1st Block 2nd Cross, Yellow round circle, Jaipur, Rajasthan 123456",
  },
  {
    name: "UK",
    icon: <Flag code="GB" style={{ width: "30px", height: "20px" }} />,
    address: "Tom Extension, 1st Block 2nd Cross, Yellow round circle, Jaipur, Rajasthan 123456",
  },
];

const LocationCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 mx-4">
      {locations.map((location, index) => (
        <div key={index} className="w-full max-w-sm p-4 text-left sm:w-1/3">
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
        </div>
      ))}
    </div>
  );
};

export default LocationCard;
