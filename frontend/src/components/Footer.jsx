import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="bg-black text-gray-300 pt-12 pb-6 mt-20 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Salon Info */}

        <div>

          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            MK Salon
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Experience premium grooming services with professional barbers.
            Book your appointment online and enjoy a hassle-free salon visit.
          </p>

        </div>


        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-yellow-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Services
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Book Appointment
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Contact
            </li>

          </ul>

        </div>


        {/* Contact */}

        <div>

          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact
          </h3>

          <p className="text-sm mb-2">
            📍 Bangalore, India
          </p>

          <p className="text-sm mb-2">
            📞 +91 99999 99999
          </p>

          <p className="text-sm mb-4">
            ✉ support@mksalon.com
          </p>

          {/* Social Icons */}

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} MK Salon. All rights reserved.

      </div>

    </footer>

  );

}