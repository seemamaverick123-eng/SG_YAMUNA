import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/farmSlice";
import FarmCard from "../components/FarmCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Slider images
import farm1 from "../assets/abc1.jpg";
import farm2 from "../assets/abc2.jpg";
import farm3 from "../assets/ABC.jpg";

const Collection = () => {
  const dispatch = useDispatch();
  const { farms, category } = useSelector((state) => state.farm);

  const [modalImg, setModalImg] = useState(null);

  const filteredFarms =
    category === "All"
      ? farms.slice(0, 9)
      : farms.filter((farm) => farm.category === category);

  return (
    <section className="bg-white min-h-screen mb-5">

      {/* Hero Slider */}
   <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-12 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {[farm1, farm2, farm3].map((img, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              {/* Image */}
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

              {/* Centered Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
              >
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white tracking-wide animate-topSlide tracking-wide font-semibold text-3d animate-slideUp">
                  Explore Our Premium Farmhouses
                </h2>

                <p className="text-sm sm:text-lg mb-6 max-w-2xl text-white tracking-wide animate-topSlide tracking-wide font-semibold text-3d animate-slideUp">
                  Perfect for parties, luxury stays, destination weddings & memorable celebrations
                </p>

                {/* CTA Button */}
                <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition-all duration-300">
                  View Collection
                </button>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <style>{`
        @keyframes slideLeft {0% {opacity:0; transform:translateX(-50px);} 100% {opacity:1; transform:translateX(0);} }
        .animate-slideLeft {animation: slideLeft 1s ease forwards;}
        @keyframes slideRight {0% {opacity:0; transform:translateX(50px);} 100% {opacity:1; transform:translateX(0);} }
        .animate-slideRight {animation: slideRight 1s ease forwards;}
        @keyframes slideUp {0% {opacity:0; transform:translateY(40px);} 100% {opacity:1; transform:translateY(0);} }
        .animate-slideUp {animation: slideUp 1s ease forwards;}
        @keyframes topSlide {0% {opacity:0; transform:translateY(-40px);} 100% {opacity:1; transform:translateY(0);} }
        .animate-topSlide {animation: topSlide 1s ease forwards;}
        @keyframes cardSlide {0% {opacity:0; transform:translateY(30px);} 100% {opacity:1; transform:translateY(0);} }
        .animate-cardSlide {animation: cardSlide .9s ease forwards;}

        @keyframes textDrift {
          0%, 100% {transform: translateY(0);} 
          50% {transform: translateY(-5px);}
        }
        .animate-textDrift {animation: textDrift 1.5s ease-in-out infinite;}

        .text-3d {text-shadow:2px 2px 5px rgba(0,0,0,0.9);}
        .text-3d-strong {text-shadow:3px 3px 8px rgba(0,0,0,1),0px 0px 12px rgba(255,255,255,0.4);}
      `}</style>
    </section>
    
  );
};

export default Collection;
