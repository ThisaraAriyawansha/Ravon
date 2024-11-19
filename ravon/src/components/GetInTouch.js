import React from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="relative h-full bg-green-700 bg-gradient-to-r from-green-700 via-green-800 to-green-900 sm:bg-gradient-to-r sm:from-green-700 sm:via-green-800 sm:to-green-900">
      {/* Top Section */}
      <div className="absolute top-0 left-0 hidden w-full bg-white h-1/4 sm:block"></div>

      {/* Content Section */}
      <div className="relative p-5 text-white">
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
          {/* Contact Information Section */}
          <div>
            <h4 className="mb-3 text-xs font-semibold text-white sm:text-green-700">
              INQUIRY
            </h4>
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-black">
              Let's Get in <span className="text-white sm:text-green-600">Touch</span>
            </h2>

            <div className="mt-10 mb-10 -ml-4 space-y-6 sm:mt-40 sm:mb-10 sm:mr-20">
              <table className="w-full table-auto">
                <tbody>
                  {/* Row for Sales and HR Departments */}
                  <tr>
                    <td className="px-4 py-2">
                      <div className="font-semibold text-white sm:text-white">Sales Department</div>
                      <div className="max-w-xs p-2 mt-1 bg-white rounded-md">
                        <p className="flex items-center text-sm text-black">
                          <FaPhoneAlt className="mr-2 text-black" />
                          +94 769417154
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-semibold text-white sm:text-white">HR Department</div>
                      <div className="max-w-xs p-2 mt-1 bg-white rounded-md">
                        <p className="flex items-center text-sm text-black">
                          <FaPhoneAlt className="mr-2 text-black" />
                          +94 769417154
                        </p>
                      </div>
                    </td>
                  </tr>

                  {/* Row for Email and Skype */}
                  <tr>
                    <td className="px-4 py-2">
                      <div className="font-semibold text-white sm:text-white">Sales Department</div>
                      <div className="max-w-xs p-2 mt-1 bg-white rounded-md">
                        <p className="flex items-center text-sm text-black">
                          <FaEnvelope className="mr-2 text-black" />
                          ravon@abc.com
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-semibold text-white sm:text-white">HR Department</div>
                      <div className="max-w-xs p-2 mt-1 bg-white rounded-md">
                        <p className="flex items-center text-sm text-black">
                          <FaSkype className="mr-2 text-black" />
                          ravon.company
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="font-semibold text-white">Read Our Customer Feedback</div>

            <div className="flex mt-4 mb-10 space-x-3 overflow-x-auto sm:mb-40">
              <img
                src="https://cdn.vox-cdn.com/thumbor/ln4IHgPYpvNoIWpJ2Y1_c9msxXA=/0x0:2012x1341/2000x1333/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg"
                alt="Google"
                className="h-12 rounded-xl sm:h-16"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaJrL4UN007PW9YH08ZD_Hxmgtu6_lvgp6g&s"
                alt="HubSpot"
                className="h-12 rounded-xl sm:h-16"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2023/04/Trustpilot-Logo.jpg"
                alt="Trustpilot"
                className="h-12 rounded-xl sm:h-16"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 text-black bg-white rounded-lg shadow-md max-h-[520px] overflow-y-auto">
          <h3 className="mb-3 text-lg font-semibold">Please fill in the form below.</h3>
            <form className="space-y-4">
              {/* Full Name and Email */}
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
              </div>

              {/* Contact Number and Skype */}
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Skype"
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
              </div>

              {/* Subject and Interested In */}
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
                <select className="w-full p-2 border rounded-md focus:outline-none">
                  <option>Interested In</option>
                  <option>Sales</option>
                  <option>HR</option>
                  <option>Support</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full p-2 border rounded-md focus:outline-none"
              ></textarea>

              {/* Terms & Conditions */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="w-4 h-4" />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-green-500">
                    Terms & Conditions
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 text-white transition bg-gradient-to-r from-green-800 to-green-600 hover:from-green-900 hover:to-green-700 rounded-xl"
              >
                Send your inquiry →
              </button>
            </form>
            <p className="mt-2 text-xs text-center">
              We hate spam, and we respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
