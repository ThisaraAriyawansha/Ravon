import React from "react";
import Navbar from "./NavBar";


const HomePage = () => {
  return (
    <div >
      <Navbar/>


      
      <div className="p-8 bg-gray-50">
      <div className="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-snug text-gray-800">
            Top Mobile App Development Company in India
          </h1>
          <p className="mt-4 text-gray-600">
            Reevan solves the world's biggest problems with expertise. Reevan
            helps global brands with digital products on web, mobile, and
            connected platforms.
          </p>
          {/* Stats Section */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center p-4 space-x-3 bg-white rounded-lg shadow-lg">
              <div className="text-2xl font-semibold text-blue-600">10M+</div>
              <div className="text-gray-600">User Engagement</div>
            </div>
            <div className="flex items-center p-4 space-x-3 bg-white rounded-lg shadow-lg">
              <div className="text-2xl font-semibold text-orange-600">150+</div>
              <div className="text-gray-600">Featured Apps</div>
            </div>
            <div className="flex items-center p-4 space-x-3 bg-white rounded-lg shadow-lg">
              <div className="text-2xl font-semibold text-green-600">450+</div>
              <div className="text-gray-600">Apps Published</div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="flex items-center mt-8 space-x-4">
            <button className="px-6 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600">
              Talk to Our Expert
            </button>
            <div className="flex items-center space-x-3">
            <img
              src="https://cdn.create.vista.com/api/media/medium/320622086/stock-photo-pensive-diplomat-glasses-touching-face-embassy?token="
              alt="Expert"
              className="w-16 h-16 rounded-full"
            />
              <div>
                <p className="font-semibold text-gray-800">Kamlesh Happy</p>
                <p className="text-sm text-gray-600">Business Head</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:w-1/2 md:mt-0">
          <div className="relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-transparent rounded-full -z-10"></div>
            <img
                src="/images/original-0e531dc7-783f-4238-a7f5-4f65e466f0c6-Photoroom.png"
                alt="App Design 1"
                className="rounded-lg"
              />


          </div>
        </div>
      </div>
    </div>


    
    </div>
  );
};

export default HomePage;
