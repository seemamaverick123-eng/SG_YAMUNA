import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

// Images
import partyImg from "../assets/dd.jpg";
import img1 from "../assets/ch.jpg";
import img2 from "../assets/chrise.webp";
import img3 from "../assets/chrish.gif";
import img4 from "../assets/chrish1.gif";
import img5 from "../assets/chrish3.gif";
import img6 from "../assets/hy.jpg";
import img7 from "../assets/hyy1.gif";
import img8 from "../assets/ch.jpg";

// Components & Redux
import FarmCard from "../components/FarmCard";
import { setCategory } from "../redux/farmSlice";

const Party = () => {
  const dispatch = useDispatch();
  const { farms, category } = useSelector((state) => state.farm);

  const [modalImg, setModalImg] = useState(null);
  const [scatter, setScatter] = useState(false);

  const offers = [
    "🎄 Special Discount 50% OFF for Early Birds!",
    "🎉 Book Your Party Now & Get Extra Gifts!",
    "🥳 Christmas Mega Offer: Buy 1 Get 1 Free!",
    "🎁 Exclusive VIP Party Package Offer!",
    "✨ Limited Time Festive Offer!",
    "💥 Flash Offer! Only Today!",
    "🎶 Music + Dinner Combo Offer!",
    "🍰 Sweet Treats & Party Package!",
  ];

  const bells = [img1, img2, img3, img4, img5, img6, img7, img8];

  const filteredFarms =
    category === "All"
      ? farms.slice(0, 9)
      : farms.filter((farm) => farm.category === category);

  useEffect(() => {
    const timer = setTimeout(() => setScatter(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50 mb-5">

      {/* HERO */}
      <div className="relative w-full h-[500px] sm:h-[650px] lg:h-[750px] ">
        <img src={partyImg} alt="Party" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold animate-slideUp text-3d">
            Party Types & Decoration
          </h1>
          <p className="mt-3 text-purple-300 text-xl animate-slideUp font-bold animate-slideUp text-3d">
            From simple gatherings to luxury celebrations
          </p>
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mt-12 px-4">
        <h2 className="text-2xl lg:text-5xl font-bold text-purple-400 animate-topSlide font-bold animate-slideUp text-3d">
          Farmhouse Collection
        </h2>
        <p className="text-gray-600 mt-2">
          Premium farmhouses for parties, stays & weddings
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
        {["All", "Party", "Stay", "Wedding"].map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategory(cat))}
            className={`px-6 py-2 rounded-full text-sm border transition-all
              ${
                category === cat
                  ? "bg-black text-white"
                  : "border-gray-300 hover:bg-black hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FARM CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {filteredFarms.map((farm, index) => (
          <motion.div
            key={farm.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            onClick={() => setModalImg(farm.image)}
            className="cursor-pointer"
          >
            <FarmCard farm={farm} />
          </motion.div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <motion.img
            src={modalImg}
            className="max-w-[90vw] max-h-[80vh] rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      {/* ANIMATIONS */}
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
    </div>
  );
};

export default Party;
