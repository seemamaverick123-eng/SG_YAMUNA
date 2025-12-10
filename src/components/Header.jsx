import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newyamuna.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openParty, setOpenParty] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-3">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-20 w-auto" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-lg text-black">

          <Link to="/" className="hover:text-pink-400 transition">Home</Link>

          <Link to="/about" className="hover:text-pink-400 transition">About</Link>

          {/* Collection Desktop Dropdown */}
          <div className="relative group">
            <Link  to="/collection" className="hover:text-pink-400 transition  hover:underline ">Farms Collection</Link>

            <div className="
              absolute left-0 mt-3 w-60 bg-white/70 backdrop-blur-xl
              shadow-xl rounded-xl border border-white/40
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-300 translate-y-3 group-hover:translate-y-0
            ">
              <ul className="flex flex-col">
                {["Farmhouse One", "Farmhouse Two", "Farmhouse Three"].map((item, i) => (
                  <li key={i}>
                    <Link
                     
                      className="block px-5 py-1 text-gray-700 hover:bg-pink-500 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Party Types Desktop */}
          <div className="relative group">
            <button className="hover:text-pink-400 transition">Party Types</button>

            <div className="
              absolute left-0 mt-3 w-60 bg-white/70 backdrop-blur-xl
              shadow-xl rounded-xl border border-white/40
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-300 translate-y-3 group-hover:translate-y-0
            ">
              <ul className="flex flex-col">
                {[
                  "Birthday Party", "Anniversary", "Corporate Event",
                  "Wedding Ceremony", "Pool Party", "Kitty Party",
                  "Bachelor Party", "Family Gathering", "Pre-Wedding Shoot",
                  "Romantic Setup"
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={`/party/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-5 py-1 text-gray-700 hover:bg-pink-500 hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/gallery" className="hover:text-pink-400 transition">Gallery</Link>
          <Link to="/contact" className="hover:text-pink-400 transition">Contact Us</Link>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block px-5 py-2 border text-black rounded-lg hover:bg-pink-400 hover:text-white transition">
          Book Now
        </button>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-xl transition-all duration-500 overflow-hidden ${
          mobileMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 text-black text-lg">

          <Link to="/" className="py-2 border-b">Home</Link>
          <Link to="/about" className="py-2 border-b">About</Link>

          {/* Mobile Collection Toggle */}
          <button
            className="py-2 text-left border-b"
            onClick={() => setOpenCollection(!openCollection)}
          >
            Collectionsss ▼
          </button>
          {openCollection && (
            <div className="pl-4">
              {["Farmhouse One", "Farmhouse Two", "Farmhouse Three"].map((item, i) => (
                <Link
                  key={i}
                  to={`/party/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="block py-1 text-gray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Party Types Toggle */}
          <button
            className="py-2 text-left border-b"
            onClick={() => setOpenParty(!openParty)}
          >
            Party Types ▼
          </button>
          {openParty && (
            <div className="pl-4">
              {[
                "Birthday Party", "Anniversary", "Corporate Event",
                "Wedding Ceremony", "Pool Party", "Kitty Party",
                "Bachelor Party", "Family Gathering", "Pre-Wedding Shoot",
                "Romantic Setup"
              ].map((item, i) => (
                <Link
                  key={i}
                  to={`/party/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="block py-1 text-gray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}

          <Link to="/gallery" className="py-2 border-b">Gallery</Link>
          <Link to="/contact" className="py-2 border-b">Contact Us</Link>

          <button className="mt-3 px-5 py-2 border rounded-lg hover:bg-pink-400 hover:text-white transition">
            Book Now
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
