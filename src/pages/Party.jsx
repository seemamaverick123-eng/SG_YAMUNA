import React, { useState, useEffect } from "react";
import partyImg from "../assets/dd.jpg";
import img1 from "../assets/ch.jpg";
import img2 from "../assets/chrise.webp";
import img3 from "../assets/chrish.gif";
import img4 from "../assets/chrish1.gif";
import img5 from "../assets/chrish3.gif";
import img6 from "../assets/hy.jpg";
import img7 from "../assets/hyy1.gif";
import img8 from "../assets/ch.jpg";

const Party = () => {
  const [activeOffer, setActiveOffer] = useState(0);
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

  // LEFT & RIGHT – CENTER SAFE POSITIONS
  const positions = [
    { x: -600, y: 100 },
    { x: -520, y: 220 },
    { x: -650, y: 300 },
    { x: -480, y: 180 },

    { x: 600, y: 100 },
    { x: 520, y: 220 },
    { x: 650, y: 300 },
    { x: 480, y: 180 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setScatter(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* HERO */}
      <div className="relative w-full h-[500px] sm:h-[650px] lg:h-[750px]">
        <img src={partyImg} className="w-full h-full object-cover" alt="Party" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Party Types & Decoration
          </h1>
          <p className="opacity-90 mt-2">
            From simple gatherings to luxury celebrations
          </p>
        </div>
      </div>
      {/* 🎄 CHRISTMAS OFFER SECTION */}
      <div className="relative py-32 bg-white overflow-hidden border-y-4 border-purple-600">

        {/* Sparkles */}
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-40 animate-sparkle"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 z-10">

          {/* LEFT – OFFER INFO */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-dark">
              <spin className=" text-black">Christmas</spin>  <span className="text-red-500">Party Offer</span>
            </h1>

            <div className="inline-block mt-6 bg-red-600 px-10 py-4 rounded-2xl text-3xl font-bold animate-pulse">
              68% OFF
            </div>

            <p className="mt-8 text-lg text-black max-w-lg mx-auto lg:mx-0">
              Book your Christmas party now and enjoy premium decoration, music,
              lighting & food packages at unbeatable festive prices.
            </p>

            {/* <ul className="mt-6 space-y-3 text-left max-w-md mx-auto lg:mx-0 text-black">
        <li>🎶 DJ Music & Dance Floor</li>
        <li>🎄 Christmas Theme Decoration</li>
        <li>🍽️ Dinner & Cake Arrangement</li>
        <li>🎁 Surprise Gifts for Guests</li>
      </ul> */}
          </div>

          {/* RIGHT – PARTY BOOKING FORM */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-black text-center">
              Book Your Party 🎉
            </h2>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-black  placeholder-black-600 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-xl text-green-800  placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-black  placeholder-gray-600 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <select
                className="w-full px-4 py-3 rounded-xl bg-white/20   placeholder-gray-600  outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option className="placeholder-gray-600 ">Select Party Type</option>
                <option className="placeholder-gray-600 ">Birthday Party</option>
                <option className="placeholder-gray-600 ">Christmas Party</option>
                <option className="placeholder-gray-600 ">Corporate Party</option>
                <option className="placeholder-gray-600 ">Family Celebration</option>
              </select>

              <textarea
                rows="3"
                placeholder="Your Requirements"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border pholder-gray-600 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="submit"
                className="w-full py-4 bg-purple-600 rounded-xl text-white font-semibold text-lg hover:bg-purple-700 transition"
              >
                🎄 Book Christmas Party
              </button>
            </form>
          </div>
        </div>

        {/* CSS */}

      </div>

    </div>
  );
};

export default Party;
<h> </h>