import React from "react";
import aboutimg from "../assets/about.png";
import { FaBed, FaCouch, FaWifi, FaParking, FaSwimmingPool, FaVideo, FaBolt, FaShower, FaCogs, FaLeaf, FaVolumeUp, FaUtensils, FaPaintBrush, FaHome } from "react-icons/fa";
import { MdOutlineWaterDrop, MdOutlineCelebration } from "react-icons/md";

const About = () => {
  const features = [
    { icon: <FaCouch />, title: "Living Room", desc: "Spacious, furnished luxury living area." },
    { icon: <FaBed />, title: "4 Bedrooms", desc: "Comfortable, private & premium rooms." },
    { icon: <FaUtensils />, title: "Modern Kitchen", desc: "Fully equipped modular kitchen." },
    { icon: <FaShower />, title: "4 Washrooms", desc: "Hygienic & modern washrooms." },
    { icon: <FaSwimmingPool />, title: "Private Pool", desc: "Clean, refreshing private pool." },
    { icon: <FaHome />, title: "Farms Exterior", desc: "Beautifully designed architecture." },
    { icon: <FaParking />, title: "Car Parking", desc: "Safe & spacious parking area." },
    { icon: <FaBolt />, title: "Power Backup", desc: "24×7 uninterrupted electricity." },
    { icon: <FaVideo />, title: "CCTV Security", desc: "Complete surveillance for safety." },
    { icon: <MdOutlineWaterDrop />, title: "Water Supply", desc: "Fresh water available 24×7." },
    { icon: <FaLeaf />, title: "Garden", desc: "Green & peaceful outdoor area." },
    { icon: <MdOutlineCelebration />, title: "Party Space", desc: "Outdoor sitting for events." },
    { icon: <FaPaintBrush />, title: "Decoration Gallery", desc: "Themes available for events." },
    { icon: <FaWifi />, title: "High-Speed WiFi", desc: "Fast & stable internet access." },
    { icon: <FaVolumeUp />, title: "Sound System", desc: "Bluetooth speakers & audio setup." }
  ];

  return (
    <div className="w-full relative overflow-hidden">

      {/* SECTION 1: ABOUT IMAGE */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh]">
        <img
          src={aboutimg}
          className="w-full h-full object-cover brightness-75"
          alt="About Banner"
        />
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 text-3d-strong animate-slideRight leading-tight">
            Goyard greens Farms – About Us
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-3 tracking-wide font-semibold text-3d animate-slideLeft">
            A perfect venue for celebrations
          </p>
          <p className="text-sm sm:text-lg md:text-xl mt-1 tracking-wide font-semibold text-3d animate-slideUp">
            Luxury • Elegance • Perfection
          </p>
        </div>
      </div>

      {/* SECTION 2: FEATURES */}
      <div className="w-full py-16 bg-white text-gray-900 flex flex-col items-center px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className=" tracking-wide font-semibold text-3d animate-slideUp text-2xl text-pink-500 sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-10 text-center tracking-wide animate-topSlide animate-slideRight leading-tight">
          Our Premium  Farmhouse Amenities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full tracking-wide animate-topSlide">
          {features.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:border-purple-500 hover:scale-[1.05] transition-all duration-300 text-center flex flex-col items-center relative overflow-hidden"
            >
              <div className="text-4xl mb-3 text-purple-400 group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:animate-textDrift">{item.title}</h3>
              <p className="text-sm sm:text-base opacity-80 group-hover:animate-textDrift">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-xl">
          <h3 className="text-2xl lg:text-4xl text-pink-500 sm:text-2xl font-bold mb-4 text-purple-400 tracking-wide animate-topSlide tracking-wide font-semibold text-3d animate-slideUp">Decoration Services</h3>
          <p className="text-base sm:text-lg opacity-90 ">
            Premium decoration available at additional charges. Wedding, birthday, anniversary, poolside and all event themes available on request.
          </p>
        </div>

      </div>

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

export default About;