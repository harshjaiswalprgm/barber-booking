import React from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaCog, FaGlobe } from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmVyc2hvcHxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 p-10 text-white">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-400 tracking-wide"
        >
          MK Salon Admin
        </motion.h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Manage Bookings */}
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            href="/admin/bookings"
            className="bg-white/10 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">

              <FaCalendarCheck className="text-5xl text-yellow-400 mb-4 group-hover:scale-110 transition" />

              <h2 className="text-xl font-semibold mb-2">
                Manage Bookings
              </h2>

              <p className="text-sm text-gray-300">
                View & control all appointments
              </p>

            </div>
          </motion.a>


          {/* Salon Settings */}
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            href="/admin/settings"
            className="bg-white/10 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">

              <FaCog className="text-5xl text-green-400 mb-4 group-hover:rotate-12 transition" />

              <h2 className="text-xl font-semibold mb-2">
                Salon Settings
              </h2>

              <p className="text-sm text-gray-300">
                Control slots & availability
              </p>

            </div>
          </motion.a>


          {/* View Website */}
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            href="/"
            className="bg-white/10 backdrop-blur-xl border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">

              <FaGlobe className="text-5xl text-blue-400 mb-4 group-hover:scale-110 transition" />

              <h2 className="text-xl font-semibold mb-2">
                View Website
              </h2>

              <p className="text-sm text-gray-300">
                Open customer booking page
              </p>

            </div>
          </motion.a>

        </div>

      </div>
    </div>
  );
}