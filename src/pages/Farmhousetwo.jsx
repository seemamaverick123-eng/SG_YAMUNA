import React from "react";
import farmImg1 from "../assets/farm1.jpg"; // replace with your images
import farmImg2 from "../assets/farm2.webp";

const FarmhouseTwo = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 space-y-20 mb-5 mt-4">

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-pink-500">Welcome to Farmhouse Two</h2>
          <p className="text-gray-700 mb-4">
            Enjoy a luxurious stay surrounded by nature. Our farmhouse offers spacious rooms, modern amenities, and serene landscapes.
          </p>
          <button className="px-5 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-all duration-300">
            Book Now
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img src={farmImg1} alt="Farmhouse Two" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Left Image */}
        <div className="md:w-1/2 overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img src={farmImg2} alt="Farmhouse Two" className="w-full h-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-pink-500">Facilities & Amenities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Swimming Pool</li>
            <li>BBQ Area</li>
            <li>Private Garden</li>
            <li>Spacious Living Rooms</li>
            <li>Wi-Fi & Modern Amenities</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default FarmhouseTwo;
