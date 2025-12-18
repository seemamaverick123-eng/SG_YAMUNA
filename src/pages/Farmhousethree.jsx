import React from "react";
import img1 from "../assets/farm1.jpg"; // Replace with your images
import img2 from "../assets/farm2.webp";
import img3 from "../assets/farm3.webp";

const FarmhouseThree = () => {
  return (
    <div className="pt-32 max-w-7xl mx-auto px-4 space-y-24 mb-4">

      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={img1}
          alt="Farmhouse Three"
          className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Farmhouse Three</h1>
          <p className="text-lg max-w-xl">
            Enjoy a luxurious getaway with stunning landscapes, perfect for celebrations and family gatherings.
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={img}
              alt={`Feature ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-center px-4">
              <p className="text-lg font-semibold">
                {index === 0 && "Spacious Living Areas & Modern Interiors"}
                {index === 1 && "Beautiful Landscapes & Gardens"}
                {index === 2 && "Swimming Pool & Recreational Spaces"}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-pink-500">Book Your Stay Now</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Make your events memorable at Farmhouse Three. Perfect for parties, weddings, and family gatherings.
        </p>
        <button className="px-6 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-all duration-300">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default FarmhouseThree;
