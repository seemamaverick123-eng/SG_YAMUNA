import React, { useState, useEffect, useRef } from "react";
import Slider from "../components/Slider";
import farmImg from "../assets/home.png";
import front1 from "../assets/1.png";
import front2 from "../assets/4.png";
import front3 from "../assets/8.png";
import front4 from "../assets/12.png";
import front5 from "../assets/13.png";
import front6 from "../assets/16.png";
import client1 from "../assets/24.png";
import client2 from "../assets/slider2.png";
import client3 from "../assets/12.png";
import attraction1 from "../assets/mall.jpg";
import attraction2 from "../assets/gip.jpg";
import attrection3 from "../assets/wow.jpg";
import attraction5 from "../assets/logix.jpg";
import attractions4 from "../assets/gaurden1.jpg";
import ikonTempleImg from "../assets/temple.webp";
import nearestMetroImg from "../assets/okla.jpg";
import nearestMetroImg1 from "../assets/botanical.jpg";
import { FaBed, FaCouch, FaWifi, FaParking, FaSwimmingPool, FaVideo, FaBolt, FaShower, FaCogs, FaLeaf, FaVolumeUp, FaUtensils, FaPaintBrush, FaHome } from "react-icons/fa";
import { MdOutlineWaterDrop, MdOutlineCelebration } from "react-icons/md";
import "../FlipCard.css";
// import Footer from "../components/Footer";
const services = [
  {
    title: "DJ Services",
    description: "On-demand professional DJs for parties and weddings.",
    icon: "🎵",
  },
  {
    title: "Decor & Setup",
    description: "Luxury themed decor and complete event arrangements.",
    icon: "🎉",
  },
  {
    title: "Full Catering",
    description: "Customized menus for 300+ guests with premium options.",
    icon: "🍽️",
  },
  {
    title: "Event Management",
    description:
      "Complete planning and execution to make your event unforgettable.",
    icon: "📋",
  },
];
// SlideOnScroll component
const SlideOnScroll = ({ children, direction = "up", delay = 0 }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let translateClass = "";
  switch (direction) {
    case "up":
      translateClass = visible ? "translate-y-0" : "translate-y-10";
      break;
    case "down":
      translateClass = visible ? "translate-y-0" : "-translate-y-10";
      break;
    case "left":
      translateClass = visible ? "translate-x-0" : "-translate-x-10";
      break;
    case "right":
      translateClass = visible ? "translate-x-0" : "translate-x-10";
      break;
    default:
      translateClass = visible ? "translate-y-0" : "translate-y-10";
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out opacity-0 scale-95 ${translateClass} ${visible ? "opacity-100 scale-100" : ""
        } ${delay ? `transition-delay-[${delay}ms]` : ""}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces([
      { id: 1, name: "DLF Mall of India", location: "Sector 18, Noida", mins: 5, img: attraction1 },
      { id: 2, name: "GIP Mall", location: "Sector 38A, Noida", mins: 8, img: attraction2 },
      { id: 3, name: "Worlds of Wonder", location: "Sector 38A, Noida", mins: 7, img: attrection3 },
      { id: 4, name: "Garden Galleria", location: "Sector 83, Noida", mins: 10, img: attractions4 },
      { id: 5, name: "Logix City Center Mall", location: "Sector 32, Noida", mins: 6, img: attraction5 },
      { id: 6, name: "ISKCON Temple Noida", location: "Sector 33, Noida", mins: 14, img: ikonTempleImg },
      { id: 7, name: "Okhla Bird Sanctuary Metro Station", location: "Sector 94, Noida", mins: 5, img: nearestMetroImg },
      { id: 8, name: "Botanical Garden Metro Station", location: "Sector 38, Noida", mins: 9, img: nearestMetroImg1 },
    ]);
  }, []);

  const cards = [
    { title: "Farmhouse", img: front1, back: "Goyard greens Farms suitable for 300+ guests, luxury arrangements, open garden décor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Donec mattis, libero ut ullamcorper placerat, ligula nisl tristique nunc." },
    { title: "Grand Weddings", img: front2, back: "Suitable for 300+ guestsLuxury arrangements & premium setupsExpansive open garden décorPerfect for weddings, private parties & corporate events Surrounded by lush greenery and open spaces, Goyard Greens offers a serene yet luxurious setting where nature meets sophistication." },
    { title: "Birthday Parties", img: front3, back: "Kids & adult birthday themes, music setup, decoration, and open area celebration. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Donec mattis, libero ut ullamcorper placerat, ligula nisl tristique nunc." },
    { title: "Party", img: front4, back: "“Celebrate under the stars 🌟 in our open garden.Luxury-themed decor and ambient lighting.Perfect for 300+ guests and grand parties!”." },
    { title: "Garden Area", img: front5, back: "✨ Luxury & Event Experience“Full event management and premium catering 🍽️Themed setups for weddings and private eventsUnforgettable celebrations at Goyard Greens Farmhouse!”." },
    { title: "Bed Room", img: front6, back: "🛏️ Bedrooms“Relax in our cozy, luxurious bedrooms 🛏️Spacious suites with modern furnishings.Enjoy serene views of the gardens & Yamuna River.”" },
  ];

  const testimonials = [
    { name: "Amit Sharma", role: "CEO, Sharma Enterprises", img: client1, quote: "Goyard greens Farms transformed our wedding into a magical experience — the venue, décor, and hospitality exceeded all expectations. Guests couldn’t stop praising the ambience and servic." },
    { name: "Priya Singh", role: "Marketing Head, Bright Events", img: client2, quote: "From engagement parties to birthday celebrations, the team handled everything with professionalism and care. The open‑garden décor and lighting made our event truly memorable." },
    { name: "Rohan Verma", role: "Freelancer", img: client3, quote: "Impeccable arrangements and warm hospitality. The food, lighting and overall vibe made our family function feel luxurious yet comfortable. Highly recommend for any celebration." },
  ];
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
    { icon: <FaPaintBrush />, title: "Bar", desc: "Bar for All Events." },
    { icon: <FaWifi />, title: "High-Speed WiFi", desc: "Fast & stable internet access." },
    { icon: <FaVolumeUp />, title: "Sound System", desc: "Bluetooth speakers & audio setup." }
  ];

  return (
    <div className="overflow-x-hidden"> {/* Main container to prevent horizontal scroll */}
      <Slider />

      {/* Hero Section */}
      {/* <SlideOnScroll direction="up">
        
      </SlideOnScroll> */}
        <div className="w-full py-16 bg-white text-gray-900 flex flex-col items-center px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className=" text-3d-strong animate-slideRight  tracking-wide font-semibold text-3d animate-slideUp text-xl text-black sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-10 text-center tracking-wide animate-topSlide animate-slideRight leading-tight">
          Our Premium<span className="text-red-600"> Farmhouse Amenities</span>  
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

        {/* <div className="mt-12 text-center max-w-xl">
          <h3 className="text-2xl lg:text-4xl text-pink-500 sm:text-2xl font-bold mb-4 text-purple-400 tracking-wide animate-topSlide tracking-wide font-semibold text-3d animate-slideUp">Decoration Services</h3>
          <p className="text-base sm:text-lg opacity-90 ">
            Premium decoration available at additional charges. Wedding, birthday, anniversary, poolside and all event themes available on request.
          </p>
        </div> */}

      </div>
  <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4 text-gray-800  font-extrabold mb-3 text-3d-strong animate-slideRight leading-tight">
          We Also Organize <span className="text-red-700">On-Demand</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We offer on-demand DJ, luxury decor, full event catering, and complete event
          management to make your celebration at Goyard Greens Farmhouse truly
          unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Nearby Attractions */}
      <section className="py-14 px-4 md:px-10 lg:px-20 bg-gray-50">
        <SlideOnScroll>
          <h2 className="text-3xl md:text-5xl text-center text-black font-extrabold mb-3 text-3d-strong animate-slideRight leading-tight">
            Nearby Attractions<span className="text-red-600 "> (Sector 126 Noida)</span> 
          </h2>
          <p className="text-center text-gray-600 mb-10">Popular places near Sector 126, Noida (5 to 10 minutes away)</p>
        </SlideOnScroll>

        {/* Auto-scrolling cards */}
        <div className="w-full overflow-x-hidden">
          <div className="flex gap-4 animate-scroll flex-nowrap">
            {places.concat(places).map((place, idx) => (
              <div key={idx} className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition transform duration-300 flex-shrink-0">
                <img src={place.img} alt={place.name} className="h-40 w-full object-cover cursor-pointer" />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900">{place.name}</h3>
                  <p className="text-sm text-gray-600">{place.location}</p>
                  <p className="mt-1 text-blue-600 font-semibold">{place.mins} min away</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scroll { display: flex; gap:16px; animation: scroll 20s linear infinite; flex-wrap: nowrap; }
        `}</style>
      </section>

      {/* Flip Cards Section */}
      <section className="w-full bg-white py-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-8 text-center font-extrabold mb-3 text-3d-strong animate-slideRight leading-tight text-black animate-slideRight leading-tight">
          Celebration <span className="text-red-500">Highlights</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {cards.map((card, i) => (
            <SlideOnScroll key={i} direction="up" delay={i * 200}>
              <div className="flip-card w-full h-96 perspective">
                <div className="flip-inner relative w-full h-full duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  <div className="flip-face absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-gray-300 shadow-lg">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-gray-900 font-semibold shadow text-center whitespace-nowrap">
                      {card.title}
                    </div>
                  </div>
                  <div className="flip-face flip-back absolute inset-0 rotate-y-180 backface-hidden bg-white border-2 border-blue-500 rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-lg">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 font-poppins italic">{card.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm text-justify px-1 overflow-y-auto max-h-60 font-poppins">{card.back}</p>
                    <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">Know More</button>
                  </div>
                </div>
              </div>
            </SlideOnScroll>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="w-full bg-gray-50 py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-black text-center text-3d-strong animate-slideRight leading-tight">
          Client<span className="text-red-600"> Testimonials</span> 
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mt-8">
          {testimonials.map((t, idx) => (
            <SlideOnScroll key={idx} direction="up" delay={idx * 200}>
              <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 h-full">
                <img src={t.img} alt={t.name} className="w-24 h-24 object-cover rounded-full mb-4" />
                <p className="text-gray-700 italic mb-4 flex-1">"{t.quote}"</p>
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </SlideOnScroll>
          ))}
        </div>
      </section>


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

 
        .text-3d-strong {text-shadow:3px 3px 8px rgba(105, 98, 98, 1),0px 0px 12px rgba(255,255,255,0.4);}
      `}</style>
    </div>
  );
};

export default Home;
