import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function AdminLogin() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email,password }
      );

      localStorage.setItem("token",res.data.token);

      window.location.href="/admin/dashboard";

    } catch(err) {

      alert("Invalid login");

    }

  };

  return (

    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1920&auto=format&fit=crop')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-gray-700 p-10 rounded-2xl shadow-2xl w-[350px] text-white"
      >

        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
          MK Salon Admin
        </h2>

        {/* Email */}
        <input
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onChange={(e)=>setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onChange={(e)=>setPassword(e.target.value)}
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={login}
          className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold shadow-lg hover:bg-yellow-400 transition"
        >
          Login
        </motion.button>

      </motion.div>

    </div>
  );
}