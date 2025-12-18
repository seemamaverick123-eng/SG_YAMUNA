import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSlideIn(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative backdrop-blur-md" style={{ background: "#16355c" }}>
      <div
        className={`max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-10 transition-transform duration-[3000ms] ${
          slideIn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Logo & description */}
        <div className="flex-1 text-white">
          <p className="text-white font-bold">Our Premium Farmhouses</p>
          <Link to="/farmhouse-one" className="text-white text-sm mt-3 block">
            Farm House One
          </Link>
          <Link to="/farmhouse-two" className="text-white block mt-1">
            Farm House Two
          </Link>
          <Link to="/farmhouse-three" className="text-white block mt-1">
            Farm House Three
          </Link>

          <button className="border border-white text-white mt-5 px-6 py-3 rounded-lg block">
            Call Now
          </button>
          <button className="border border-white text-white mt-5 px-4 py-3 rounded-lg block">
            WhatsApp
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-white">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <Link to="/" className="hover:text-blue-400 transition block">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition block">About Us</Link>
            <Link to="/collection" className="hover:text-blue-400 transition block">Collections</Link>
            <Link to="/party" className="hover:text-blue-400 transition block">Party Types</Link>
            <Link to="/contact" className="hover:text-blue-400 transition block">Contact Us</Link>
          </ul>
        </div>

        {/* Party Types */}
        <div className="flex-1 text-white">
          <h3 className="font-semibold mb-4">Party Type</h3>
          <ul className="space-y-2">
            <Link to="/" className="hover:text-blue-400 transition cursor-pointer">Birthday Party</Link><br></br>
            <Link to="/" className="hover:text-blue-400 transition cursor-pointer">Anniversary</Link>
            <Link to="/collection" className="hover:text-blue-400 transition cursor-pointer">Corporate Event</Link>
            <li className="hover:text-blue-400 transition cursor-pointer">Wedding Ceremony</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Pool Party</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Kitty Party</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Bachelor Party</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Family Gathering</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Romantic Setu</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Pre-Wedding Shoot</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex-1 text-white">
          <Link to="/contact" className="font-semibold mb-4 block">Contact Us</Link>
          <p className="text-white text-sm mb-2">123 Royal Street, Noida, India</p>
          <p className="text-white text-sm mb-2">Email: info@royalorchid.com</p>
          <p className="text-white text-sm mb-4">Phone: +91</p>

          <div className="flex gap-4 mt-2">
            <FaFacebookF className="text-blue-600 hover:text-blue-400 cursor-pointer transition text-2xl" />
            <FaTwitter className="text-sky-400 hover:text-sky-200 cursor-pointer transition text-2xl" />
            <FaInstagram className="text-pink-500 hover:text-pink-300 cursor-pointer transition text-2xl" />
            <FaLinkedinIn className="text-blue-700 hover:text-blue-500 cursor-pointer transition text-2xl" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 py-4 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Goyard Greens Farms. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
