import React from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaCog, FaGlobe } from "react-icons/fa";

export default function AdminDashboard() {
  return (
   <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1800&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

  {/* GOLD GLOW */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full" />

  <div className="relative z-10 p-6 md:p-10">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto mb-12"
    >

      <p className="uppercase tracking-[6px] text-yellow-400 text-xs mb-4">
        MK UNISEX SALON
      </p>

      <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-6">

        Admin

        <br />

        Dashboard

      </h1>

      <p className="text-gray-400 max-w-xl leading-8">

        Manage bookings, configure salon availability,
        monitor customer appointments and control your
        entire salon operation from one place.

      </p>

    </motion.div>

    {/* STATS BAR */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5 mb-10">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

        <h2 className="text-4xl font-black text-yellow-400">
          500+
        </h2>

        <p className="text-gray-400 mt-2">
          Total Customers
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

        <h2 className="text-4xl font-black text-yellow-400">
          4.9★
        </h2>

        <p className="text-gray-400 mt-2">
          Customer Rating
        </p>

      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

        <h2 className="text-4xl font-black text-yellow-400">
          15+
        </h2>

        <p className="text-gray-400 mt-2">
          Years Experience
        </p>

      </div>

    </div>

    {/* ACTION CARDS */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

      {/* BOOKINGS */}
      <motion.a
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        whileTap={{ scale: 0.98 }}
        href="/admin/bookings"
        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl"
      >

        <FaCalendarCheck className="text-6xl text-yellow-400 mb-8 group-hover:scale-110 transition" />

        <h2 className="text-2xl font-bold text-white mb-4">
          Manage Bookings
        </h2>

        <p className="text-gray-400 leading-7">
          View, approve and manage all salon
          appointments from one dashboard.
        </p>

      </motion.a>

      {/* SETTINGS */}
      <motion.a
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        whileTap={{ scale: 0.98 }}
        href="/admin/settings"
        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl"
      >

        <FaCog className="text-6xl text-yellow-400 mb-8 group-hover:rotate-90 transition duration-500" />

        <h2 className="text-2xl font-bold text-white mb-4">
          Salon Settings
        </h2>

        <p className="text-gray-400 leading-7">
          Configure slot timings, availability and
          salon operational settings.
        </p>

      </motion.a>

      {/* WEBSITE */}
      <motion.a
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        whileTap={{ scale: 0.98 }}
        href="/"
        className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl"
      >

        <FaGlobe className="text-6xl text-yellow-400 mb-8 group-hover:scale-110 transition" />

        <h2 className="text-2xl font-bold text-white mb-4">
          View Website
        </h2>

        <p className="text-gray-400 leading-7">
          Open the customer-facing booking website
          and verify appointments.
        </p>

      </motion.a>

    </div>

  </div>

</div>
  );
}
