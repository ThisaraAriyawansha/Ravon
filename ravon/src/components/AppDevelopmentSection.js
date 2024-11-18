import React from 'react';
import { faUsers, faRocket, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppDevelopmentSection = () => {
  return (
    <section className="bg-[#E6F4E7] py-8 px-4 max-w-[92rem] mx-auto text-center">
      {/* Header Section */}
      <div className="p-20 mb-6 text-center">
        <h4 className="mb-8 text-xs font-semibold text-green-700">WE ARE RAVON</h4>
        <h2 className="text-2xl font-bold text-gray-800">
          Award Winning App Development Company
        </h2>
        <p className="mt-2 text-sm font-bold text-gray-600">
          #1 Mobile App Company, Awarded for Its Top Features/Editor Apps Delivered.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          ReeVan started in the year 1999. We are Worldwide-based Web, App, and Digital Marketing Company. Our main Domain is Web Design,<br/> 
          App Development, Digital Marketing, Product Design, and Cloud Services. Customer Satisfaction and the highest rate of Customer Repeatability<br/> 
          are some of the pioneers in this field. So, what are you waiting for? Let us discuss your ideas and innovation in detail because catering to your<br/> 
          requirement and converting it into a final product is our main goal.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative mb-6">
        <img
          src="/images/the-landscape-for-staffing-hr-professionals-is-shifting-4-trends-to-watch-blog-RH-11-04-2024_Large-1x.webp"
          alt="Business Team"
          className="rounded-lg"
          style={{ width: "1500px", height: "500px" }}
        />

        {/* Stats Section at the corner of the image */}
        <div className="absolute hidden max-w-2xl p-4 bg-green-600 rounded-lg top-96 right-36 md:block">
          <table className="w-full text-white">
            <tbody>
              <tr>
                <td className="p-4">
                  <div className="text-white rounded-lg">
                    <h3 className="text-3xl font-bold">7500+</h3>
                    <p className="mt-1 text-sm">Projects Delivered</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-white rounded-lg">
                    <h3 className="text-3xl font-bold">3500+</h3>
                    <p className="mt-1 text-sm">Enterprise Clients</p>
                  </div>
                </td>
                <td className="p-4" rowSpan="2">
                  <div className="text-black rounded-lg">
                    <h3 className="text-3xl font-bold">RAVON</h3>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <div className="text-white rounded-lg">
                    <h3 className="text-3xl font-bold">540+</h3>
                    <p className="mt-1 text-sm">Experts Team</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-white rounded-lg">
                    <h3 className="text-3xl font-bold">20+</h3>
                    <p className="mt-1 text-sm">Success Years</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button className="flex items-center justify-center p-32 px-6 py-2 mb-20 ml-24 mr-10 text-green-800 transition duration-300 border border-green-800 rounded-full hover:bg-green-800 hover:text-white mt-28">
        Know More Ravon
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
      </button>

      {/* Awards Section */}
<div className="text-center">
  {/* Awards Details Section - Responsive Layout */}
  <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
    {["Top App Developer", "Top App Developer", "Top App Developer", "Top App Developer", "Top App Developer"].map((title, idx) => (
      <div key={idx} className={`flex-1 p-3 bg-transparent rounded-lg shadow-md ${idx === 4 ? 'col-span-2 md:col-span-1 text-center' : ''}`}>
        {/* Image for Each Award */}
        <div className="mb-3">
          <img 
            src={`/images/award-image-${idx + 1}.PNG`}  // Replace with actual image paths
            alt={`${title} award`} 
            className="w-16 h-16 mx-auto rounded-full"  // Adjust image size and rounding
          />
        </div>
        {/* Award Title */}
        <div className="text-lg font-bold text-black">{title}</div>
        {/* Description */}
        <p className="mt-1 text-xs text-gray-600">Genuine Quality</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default AppDevelopmentSection;
