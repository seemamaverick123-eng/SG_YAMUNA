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
    "💥 Flash Sale! Only Today!",
    "🎶 Music + Dinner Combo Offer!",
    "🍰 Sweet Treats & Party Package!",
  ];

  const bells = [img1, img2, img3, img4, img5, img6, img7, img8];

  // LEFT (-X) & RIGHT (+X) scatter positions
  const positions = [
    { x: -420, y: 120 },
    { x: -300, y: 220 },
    { x: -520, y: 300 },
    { x: -380, y: 180 },

    { x: 420, y: 120 },
    { x: 300, y: 220 },
    { x: 520, y: 300 },
    { x: 380, y: 180 },
  ];

  // After 1 full orbit
  useEffect(() => {
    const timer = setTimeout(() => setScatter(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* HERO */}
      <div className="relative w-full h-[500px] sm:h-[650px] lg:h-[750px]">
        <img src={partyImg} className="w-full h-full object-cover" alt="Party" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold">Party Types & Decoration</h1>
          <p className="opacity-90 mt-2">From simple gatherings to luxury celebrations</p>
        </div>
      </div>

      {/* CHRISTMAS SALE */}
      <div className="relative py-32 bg-[#0d0d12] overflow-hidden border-y-4 border-purple-600">

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

        {/* BELLS */}
        <div className="relative flex justify-center items-center mt-20">
          <div className="relative w-[700px] h-[400px] ml-[-120px]">
            {bells.map((bell, i) => (
              <img
                key={i}
                src={bell}
                alt="bell"
                onClick={() => setActiveOffer(i)}
                className={`absolute w-16 sm:w-20 cursor-pointer drop-shadow-[0_0_20px_white]
                ${scatter ? `scatter-${i}` : "orbit"}`}
                style={{ transformOrigin: "350px 200px" }}
              />
            ))}
          </div>

          {/* CENTER CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
            <h1 className="text-5xl sm:text-7xl font-extrabold">
              Christmas <span className="text-red-500">SALE</span>
            </h1>

            <div className="mt-6 bg-red-600 px-8 py-4 rounded-2xl text-3xl font-bold animate-pulse">
              68% OFF
            </div>

            <div className="mt-8 bg-purple-700/70 p-6 rounded-xl text-lg">
              {offers[activeOffer]}
            </div>

            <button className="mt-8 px-14 py-4 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700">
              Book Now
            </button>
          </div>
        </div>

        {/* CSS */}
        <style>{`
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
          }
          .orbit { animation: orbit 10s linear infinite; }

          @keyframes sparkle {
            0%,100% { opacity: .3 }
            50% { opacity: 1 }
          }
          .animate-sparkle { animation: sparkle 2s infinite; }

          ${positions.map(
            (p, i) => `
            @keyframes scatter-${i} {
              to {
                transform: translate(${p.x}px, ${p.y}px) scale(1.3) rotate(360deg);
              }
            }
            .scatter-${i} {
              animation: scatter-${i} 3s forwards;
            }
          `
          ).join("")}
        `}</style>
      </div>
    </div>
  );
};

export default Party;
