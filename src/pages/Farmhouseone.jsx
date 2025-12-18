import React from "react";
import img1 from "../assets/farm3.webp"; // Replace with your images
import img2 from "../assets/farm3.webp";

const FarmhouseOne = () => {
  return (
    <div className="pt-32 max-w-7xl mx-auto px-4 space-y-24 mb-5">

      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden shadow-lg">
        <img src={img1} alt="Farmhouse One" className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Farmhouse One</h1>
          <p className="text-lg max-w-xl">Experience luxury and tranquility in the heart of nature. Perfect for parties, weddings, and getaways.</p>
        </div>
      </section>

      {/* Facilities / Highlights Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <img src={img2} alt="Facilities" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-center px-4">
            <p className="text-lg font-semibold">Spacious gardens, modern amenities, and a serene environment perfect for your gatherings.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-pink-500">Features & Amenities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Swimming Pool</li>
            <li>BBQ & Outdoor Seating</li>
            <li>Private Halls</li>
            <li>Decorated Interiors</li>
            <li>High-Speed Wi-Fi</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-all duration-300">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default FarmhouseOne;
