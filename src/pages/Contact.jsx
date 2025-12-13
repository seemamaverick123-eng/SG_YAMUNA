import React from "react";
import { motion } from "framer-motion";
import {
  HiLocationMarker,
  HiMail,
  HiPhone,
} from "react-icons/hi";
import {
  FaWhatsapp,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

import venueBg from "../assets/bgg.jpeg";
import contactBg from "../assets/pool1.png";

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= GLASS CARD ================= */
const GlassCard = ({ icon, title, value, gradient }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative group rounded-3xl p-[1px]
               bg-gradient-to-br from-white/40 to-white/10
               hover:from-white/70 hover:to-white/20
               transition-all duration-300"
  >
    <div className="relative h-full bg-white/60 backdrop-blur-xl
                    rounded-3xl p-8 text-center
                    shadow-lg hover:shadow-2xl">

      <div
        className={`mx-auto mb-5 w-16 h-16 rounded-2xl
        flex items-center justify-center
        bg-gradient-to-br ${gradient}
        text-white text-3xl
        group-hover:scale-110 transition`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  </motion.div>
);

/* ================= MAIN PAGE ================= */
const ContactPage = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 " />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
            Email • WhatsApp • Instagram • Google Business
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO (NEW DESIGN) ================= */}
      <section className="relative z-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 px-4">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <GlassCard
            icon={<HiMail />}
            title="Email"
            value="info@business.com"
            gradient="from-blue-500 to-cyan-500"
          />

          <GlassCard
            icon={<HiPhone />}
            title="Contact Number"
            value="+91 12345 67890"
            gradient="from-indigo-500 to-violet-500"
          />

          <GlassCard
            icon={<FaWhatsapp />}
            title="WhatsApp"
            value="+91 12345 67890"
            gradient="from-green-500 to-emerald-500"
          />

          <GlassCard
            icon={<FaInstagram />}
            title="Instagram"
            value="@business"
            gradient="from-pink-500 to-rose-500"
          />

          <GlassCard
            icon={<HiLocationMarker />}
            title="Address"
            value="Sector 126, Noida, Uttar Pradesh"
            gradient="from-red-500 to-orange-500"
          />

          <GlassCard
            icon={<FaGoogle />}
            title="Google Business"
            value="View on Google Maps"
            gradient="from-yellow-400 to-amber-500"
          />
        </motion.div>
      </section>

      {/* ================= VENUE BOOKING ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-24"
        style={{ backgroundImage: `url(${venueBg})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-xl
                     border border-white/20 rounded-3xl shadow-2xl p-8"
        >
          <h2 className="text-3xl font-light text-white text-center mb-2">
            Venue Booking
          </h2>
          <p className="text-gray-300 text-center mb-6">
            Elegant • Silent • Professional
          </p>

          <form className="space-y-4">
            {["Full Name", "Email Address", "Phone Number"].map((p, i) => (
              <input
                key={i}
                placeholder={p}
                className="w-full bg-white/20 text-white placeholder-gray-300
                           px-4 py-3 rounded-lg outline-none
                           focus:ring-2 focus:ring-white/40"
              />
            ))}

            <textarea
              rows="4"
              placeholder="Special Requirements"
              className="w-full bg-white/20 text-white placeholder-gray-300
                         px-4 py-3 rounded-lg outline-none
                         focus:ring-2 focus:ring-white/40 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg
                         bg-gradient-to-r from-blue-500 to-purple-500
                         text-white font-medium shadow-lg"
            >
              Book Venue
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* ================= MAP ================= */}
      <section className="bg-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold mb-6 flex justify-center items-center gap-2">
            <HiLocationMarker className="text-red-500 text-4xl" />
            Our Location
          </h2>

          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Sector 126 Noida"
              src="https://www.google.com/maps?q=Sector+126+Noida+Uttar+Pradesh&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
