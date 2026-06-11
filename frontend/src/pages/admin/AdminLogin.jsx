import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Lock, Mail, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password },
      );

      localStorage.setItem("token", res.data.token);

      window.location.href = "/admin/dashboard";
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
   <div className="min-h-screen bg-black flex items-center justify-center p-5">

  <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

    {/* LEFT SIDE */}
    <div
      className="relative min-h-[700px] hidden lg:flex flex-col justify-between p-12 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1400&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <p className="uppercase tracking-[6px] text-yellow-400 text-xs mb-6">
          MK UNISEX SALON
        </p>

        <h1 className="text-6xl font-black leading-[0.9] text-white">

          MK Unisex

          <br />

          Salon



        </h1>

      </div>

      <div className="relative z-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <h3 className="text-white text-xl font-bold mb-2">
            Manage Bookings
          </h3>

          <p className="text-gray-300 text-sm leading-7">
            Access appointments, salon settings,
            customers and daily operations from one dashboard.
          </p>

        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="bg-[#0f0f0f] flex items-center justify-center p-8 md:p-14">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >

        <div className="mb-10">

          <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

            <ShieldCheck
              size={30}
              className="text-black"
            />

          </div>

          <h2 className="text-5xl font-black text-white mb-4">

            Welcome

            <br />

            Back

          </h2>

          <p className="text-gray-400">
            Login to MK Unisex Salon Admin Dashboard
          </p>

        </div>

        {/* EMAIL */}
        <div className="mb-5">

          <label className="text-sm text-gray-400 block mb-2">
            Email Address
          </label>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

            <Mail
              size={18}
              className="text-gray-500"
            />

            <input
              type="email"
              placeholder="admin@mksalon.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none text-white w-full"
            />

          </div>

        </div>

        {/* PASSWORD */}
        <div className="mb-8">

          <label className="text-sm text-gray-400 block mb-2">
            Password
          </label>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

            <Lock
              size={18}
              className="text-gray-500"
            />

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none text-white w-full"
            />

          </div>

        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={login}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl font-bold text-lg transition duration-300"
        >

          Login to Dashboard

        </motion.button>

      </motion.div>

    </div>

  </div>

</div>
  );
}
