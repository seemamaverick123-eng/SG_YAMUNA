
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Update path if needed
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSlideIn(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (

    <footer className="relative  backdrop-blur-md" style={{ background: " #16355c" }}>
      {/* Triangle Design at the top */}


      {/* Footer content */}
      <div
        className={`max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-10 transition-transform duration-[3000ms] ${slideIn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
      >
        {/* Logo & description */}
        <div className="flex-1">
          {/* <img src={logo} alt="Logo" className="w-32 mb-4" /> */}
          <p className="text-white  text-bold">Our Premium Farmhouses</p>
          <p className="text-white text-sm mt-3">
            Farm House One


          </p>
          <p className="text-white"   >Farm House Two
          </p>
          <p className="text-white">Farm House Three</p>        </div>

        {/* Quick Links */}
        <div className="flex-1 text-white">
          <h3 className=" font-semibold mb-4 text-bold white ">Quick Links</h3>
          <ul className="text-black space-y-2 text-bold">
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p cla>Home</p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>About Us</p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Collections </p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white">Party Types</li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Gallery</p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Contact Us</p></li>

          </ul>
        </div>
         <div className="flex-1 text-white">
          <h3 className=" font-semibold mb-4 text-bold white ">Party Type</h3>
          <ul className="text-black space-y-2 text-bold">
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p cla>Birthday Party</p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Anniversary</p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Corporate Event </p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white">Wedding Ceremony</li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Pool Party</p></li>
            <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Kitty Party</p></li>
 <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Bachelor Part</p></li>
  <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Family Gathering</p></li>
   <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Romantic Setu</p></li>
    <li className="hover:text-blue-400 transition cursor-pointer text-white"><p>Pre-Wedding Shoot</p></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex-1 text-black">
          <h3 className="text-white font-semibold mb-4 text-black"><p className="text-white text-bold"> Contact Us</p></h3>
          <p className="text-gray-200 text-sm mb-2 "><p className="text-white ">123 Royal Street, Noida, India</p></p>
          <p className="text-gray-200 text-sm mb-2"><p className="text-white ">Email: info@royalorchid.com</p></p>
          <p className="text-gray-200 text-sm mb-4"><p className="text-white ">Phone: +91</p></p>

          <div className="flex gap-4 mt-2 text-white">
            <FaFacebookF className="text-white hover:text-blue-500 cursor-pointer transition text-black" />
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer transition" />
            <FaInstagram className="text-white hover:text-pink-500 cursor-pointer transition" />
            <FaLinkedinIn className=" text-white  hover:text-blue-600 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-400 mt-8 py-4 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Goyard greens Farms. All Rights Reserved.
      </div>
    </footer>


  );
};

export default Footer;
