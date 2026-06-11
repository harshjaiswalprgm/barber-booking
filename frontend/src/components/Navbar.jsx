import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // ✅ Smooth Scroll
  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

      setOpen(false);

    }

  };

  return (

    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">

      {/* MAIN NAVBAR */}
      <div className="bg-white/80 backdrop-blur-2xl border border-white/30 rounded-[28px] px-6 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-14">

            {/* LOGO */}
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-4 cursor-pointer group"
            >

              {/* ICON */}
              <div className="w-11 h-11  bg-black text-yellow-400 flex items-center justify-center border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.18)] group-hover:scale-105 transition duration-300">

               <img src="/mkunisexsalon.png" alt="MK Unisex Salon Logo"  className="w-full h-full object-cover rounded-3xl"/>

              </div>

              {/* TEXT */}
              <div>

                <h1 className="text-[28px] font-black tracking-[-1px] text-black leading-none">

                  MK

                  <span className="text-gray-600 ml-2 font-bold">
                    Unisex Salon
                  </span>

                </h1>

              </div>

            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-9 text-gray-700 font-semibold">

              <li
                onClick={() => scrollToSection("home")}
                className="relative cursor-pointer transition duration-300 hover:text-black text-[15px]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-yellow-400 after:transition-all
                hover:after:w-full"
              >
                Home
              </li>

              <li
                onClick={() => scrollToSection("services")}
                className="relative cursor-pointer transition duration-300 hover:text-black text-[15px]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-yellow-400 after:transition-all
                hover:after:w-full"
              >
                Services
              </li>

              <li
                onClick={() => scrollToSection("about")}
                className="relative cursor-pointer transition duration-300 hover:text-black text-[15px]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-yellow-400 after:transition-all
                hover:after:w-full"
              >
                About
              </li>

              <li
                onClick={() => scrollToSection("gallery")}
                className="relative cursor-pointer transition duration-300 hover:text-black text-[15px]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-yellow-400 after:transition-all
                hover:after:w-full"
              >
                Gallery
              </li>

              <li
                onClick={() => scrollToSection("contact")}
                className="relative cursor-pointer transition duration-300 hover:text-black text-[15px]
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-yellow-400 after:transition-all
                hover:after:w-full"
              >
                Contact
              </li>

              {/* DROPDOWN */}
              <div className="relative">

                <button
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl transition duration-300 text-[15px]"
                >

                  More

                  <ChevronDown
                    size={16}
                    className={`transition duration-300 ${
                      settingsOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {/* DROPDOWN MENU */}
                {settingsOpen && (

                  <div className="absolute top-14 left-0 w-56 bg-white rounded-2xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">

                    <a
                      href="/admin/login"
                      className="block px-6 py-4 hover:bg-gray-100 transition font-medium"
                    >
                      Login
                    </a>

                    <button
                      onClick={() => scrollToSection("booking")}
                      className="w-full text-left px-6 py-4 hover:bg-gray-100 transition font-medium"
                    >
                      Book Appointment
                    </button>

                    <button
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-6 py-4 hover:bg-gray-100 transition font-medium"
                    >
                      Pricing
                    </button>

                  </div>

                )}

              </div>

            </ul>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">

            {/* SEARCH */}
            <button className="w-11 h-11 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition duration-300">

              <Search
                size={18}
                className="text-gray-700"
              />

            </button>

            {/* AVATAR */}
            {/* <div className="w-11 h-11 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-black font-black shadow-lg">
              MK
            </div> */}

            {/* BUTTON */}
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-black text-white px-7 py-3 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              Book Now
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-black"
            onClick={() => setOpen(!open)}
          >

            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-2xl rounded-[28px] border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">

          <ul className="flex flex-col text-gray-800 font-medium">

            <li
              onClick={() => scrollToSection("home")}
              className="px-7 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              Home
            </li>

            <li
              onClick={() => scrollToSection("services")}
              className="px-7 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              Services
            </li>

            <li
              onClick={() => scrollToSection("about")}
              className="px-7 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              About
            </li>

            <li
              onClick={() => scrollToSection("gallery")}
              className="px-7 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              Gallery
            </li>

            <li
              onClick={() => scrollToSection("contact")}
              className="px-7 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              Contact
            </li>

            <a
              href="/admin/login"
              className="px-7 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              Admin Login
            </a>

            <div className="p-5">

              <button
                onClick={() => scrollToSection("booking")}
                className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                Book Appointment
              </button>

            </div>

          </ul>

        </div>

      )}

    </nav>

  );

}