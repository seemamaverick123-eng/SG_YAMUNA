import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newyamuna.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openParty, setOpenParty] = useState(false);

  const partyOptions = [
    "Birthday Party",
    "Anniversary",
    "Corporate Event",
    "Wedding Ceremony",
    "Pool Party",
    "Kitty Party",
    "Bachelor Party",
    "Family Gathering",
    "Pre-Wedding Shoot",
    "Romantic Setup",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-3">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 text-lg text-black">

          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/about" className="hover:text-pink-400 transition">About</Link>

          {/* Farms Collection */}
          <div className="relative group">
            <Link to="/collection" className="hover:text-pink-400 transition">
              Farms Collection
            </Link>

            <div className="absolute left-0 mt-3 w-60 bg-white/30 backdrop-blur-xl shadow-xl rounded-xl border border-white/40
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-3 group-hover:translate-y-0">
              <ul>
                <Link to="/farmhouse-one" className="block px-5 py-2 hover:bg-pink-500 hover:text-white">Farmhouse One</Link>
                <Link to="/farmhouse-two" className="block px-5 py-2 hover:bg-pink-500 hover:text-white">Farmhouse Two</Link>
                <Link to="/farmhouse-three" className="block px-5 py-2 hover:bg-pink-500 hover:text-white">Farmhouse Three</Link>
              </ul>
            </div>
          </div>

          {/* Party Types */}
          <div className="relative group">
            <Link to="/party" className="hover:text-pink-400 transition">
              Party Types
            </Link>

            <div className="absolute left-0 mt-3 w-72 bg-white/30 backdrop-blur-xl shadow-xl rounded-xl border border-white/40
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-3 group-hover:translate-y-0">
              <ul>
                {partyOptions.map((item, i) => (
                  <li key={i} className="px-5 py-2 text-gray-700 hover:bg-pink-500 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/contact" className="hover:text-pink-400 transition">Contact Us</Link>
        </nav>

        {/* Book Now */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 border rounded-lg hover:bg-pink-400 hover:text-white transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl ml-3"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-xl p-4 space-y-2">
          <Link to="/" className="block py-2" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link to="/about" className="block py-2" onClick={() => setMobileMenu(false)}>About</Link>

          {/* Mobile Collection */}
          <button onClick={() => setOpenCollection(!openCollection)} className="block py-2 w-full text-left">
            Farms Collection ▼
          </button>

          {openCollection && (
            <div className="pl-4">
              <Link to="/farmhouse-one" className="block py-1">Farmhouse One</Link>
              <Link to="/farmhouse-two" className="block py-1">Farmhouse Two</Link>
              <Link to="/farmhouse-three" className="block py-1">Farmhouse Three</Link>
            </div>
          )}

          {/* Mobile Party Types */}
          <button onClick={() => setOpenParty(!openParty)} className="block py-2 w-full text-left">
            Party Types ▼
          </button>

          {openParty && (
            <div className="pl-4">
              <Link
                to="/party"
                className="block py-1 font-semibold text-pink-500"
                onClick={() => setMobileMenu(false)}
              >
                All Party Types
              </Link>

              {partyOptions.map((item, i) => (
                <span key={i} className="block py-1 text-sm text-gray-600">
                  {item}
                </span>
              ))}
            </div>
          )}

          <Link to="/contact" className="block py-2" onClick={() => setMobileMenu(false)}>Contact</Link>

          <Link
            to="/contact"
            className="block mt-3 px-5 py-2 border rounded-lg text-center hover:bg-pink-400 hover:text-white transition"
            onClick={() => setMobileMenu(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
