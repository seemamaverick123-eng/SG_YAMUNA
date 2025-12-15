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
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3">
                  Explore Our Premium Farmhouses
                </h2>

                <p className="text-sm sm:text-lg mb-6 max-w-2xl">
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

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mt-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-black">
          Farmhouse Collection
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Premium farmhouses for parties, stays & weddings
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 mt-6">
        {["All", "Party", "Stay", "Wedding"].map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategory(cat))}
            className={`px-6 py-2 rounded-full text-sm border transition-all
              ${
                category === cat
                  ? "bg-black text-white"
                  : "border-gray-300 text-black hover:bg-black hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {filteredFarms.map((farm, index) => (
          <motion.div
            key={farm.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div
              className="cursor-pointer"
              onClick={() => setModalImg(farm.image)}
            >
              <FarmCard farm={farm} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <motion.img
            src={modalImg}
            alt="full-view"
            className="max-h-[80vh] max-w-[90vw] rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </section>
  );
};

export default Collection;
