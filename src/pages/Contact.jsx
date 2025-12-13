import React from "react";

const VenueBookingForm = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503428593586-e225b39bddfe')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Form Card */}
            <div className="relative w-full max-w-xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 animate-fadeIn">
                <h2 className="text-3xl font-light text-white text-center mb-2">
                    Venue Booking
                </h2>
                <p className="text-gray-300 text-center mb-6 text-sm">
                    Elegant • Silent • Professional
                </p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/40 transition"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/40 transition"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/40 transition"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="date"
                            className="bg-white/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/40 transition"
                        />
                        <input
                            type="number"
                            placeholder="Guests"
                            className="bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/40 transition"
                        />
                    </div>

                    <select className="w-full bg-white/20 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/40 transition">
                        <option className="text-black">Wedding</option>
                        <option className="text-black">Pre-Wedding Shoot</option>
                        <option className="text-black">Anniversary</option>
                        <option className="text-black">Pool Party</option>
                        <option className="text-black">Family Gathering</option>
                        <option className="text-black">Corporate Event</option>
                        <option className="text-black">Birthday Party</option>
                        <option className="text-black">Wedding Ceremony</option>
                        <option className="text-black">Kitti Party</option>
                        <option className="text-black">Bachelor Party</option>
                         <option className="text-black">Bachelor Party</option>
                    </select>

                    <textarea
                        rows="3"
                        placeholder="Special Requirements"
                        className="w-full bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/40 transition resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full mt-4 py-3 rounded-lg bg-white/80 text-black font-medium hover:bg-white transition duration-300"
                    >
                        Book Venue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VenueBookingForm;
