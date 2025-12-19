import React, { useState, useEffect } from "react";
import banner3 from "../assets/buddy.jpg";
import banner1 from "../assets/slider1.png";
import banner2 from "../assets/sd.jpg";

import leftIcon from "../assets/hy.jpg";
import rightIcon from "../assets/hyy1.gif";

const slides = [banner1, banner2, banner3];

const sliderTexts = [
  {
    title: "A perfect venue for your dream weddings, corporate events, and celebrations.",
    main: "Celebrate in style at Goyard greens Farms Noida",
    sub: "Book Your Event Today +91 9999768433",
  },
  {
    title: "Host unforgettable moments with elegance and comfort.",
    main: "Experience Luxury at Goyard greens Farms",
    sub: "Contact us now +91 9999768433",
  },
  {
    title: "Your ideal destination for parties and corporate gatherings.",
    main: "Event Memorable at Goyard greens Farms",
    sub: "Reserve Your Spot +91 9999768433",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mt-24 ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide} alt="" className="w-full h-full object-cover" />

          {/* TEXT CENTER */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-3 md:px-6">
            <h1
              className={`text-xl md:text-5xl font-bold mb-2 text-3d-strong animate-slideRight leading-tight md:mb-4 leading-snug ${
                index === current ? "animate-slideRight" : "opacity-0"
              }`}
            >
              {sliderTexts[index].main}
            </h1>
            <p
              className={`text-sm md:text-2xl mb-2 md:mb-4 text-3d-strong animate-slideRight leading-tight tracking-wide font-medium ${
                index === current ? "animate-slideLeft" : "opacity-0"
              }`}
            >
              {sliderTexts[index].title}
            </p>
            <p
              className={`text-sm md:text-xl mt-1 tracking-wide text-3d-strong animate-slideRight leading-tight font-medium ${
                index === current ? "animate-slideUp" : "opacity-0"
              }`}
            >
              {sliderTexts[index].sub}
            </p>
            <a
      href="tel:+91 9999768433" // Replace with your booking page URL if needed
      className="inline-block px-8 py-3 bg-red-900 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
    >
      Book Now
    </a>
          </div>
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 
        bg-white/40 rounded-full w-12 h-12 md:w-16 md:h-16 
        flex items-center justify-center backdrop-blur-xl shadow-lg hover:bg-white/70 transition"
      >
        <img
          src={leftIcon}
          className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover"
          alt="left"
        />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2
        bg-white/40 rounded-full w-12 h-12 md:w-16 md:h-16
        flex items-center justify-center backdrop-blur-xl shadow-lg hover:bg-white/70 transition"
      >
        <img
          src={rightIcon}
          className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover"
          alt="right"
        />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 md:gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full border border-white/70 ${
              i === current ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideLeft { animation: slideLeft 1.2s ease forwards; }

        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideRight { animation: slideRight 1.2s ease forwards; }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 1.2s ease forwards; }
      `}</style>
    </div>
  );
};

export default Slider;
