import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="bg-[#f3f3f3] px-5 md:px-10 py-16">

      <div className="max-w-7xl mx-auto">

        {/* TOP CTA */}
        <div className="relative overflow-hidden rounded-[40px] bg-black text-white py-24 px-6 md:px-16 text-center shadow-2xl">

          {/* Glow */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-4xl md:text-6xl font-bold tracking-[-2px] mb-6">

              Ready for your

              <br />

              next haircut?

            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto leading-8 text-[15px] mb-10">

              Join hundreds of satisfied customers at
              MK Unisex Salon and experience premium
              grooming, modern styling and luxury salon care.

            </p>

            <button
              onClick={() =>
                document
                  .getElementById("booking")
                  .scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Book Appointment
            </button>

          </div>

        </div>

        {/* FOOTER CARD */}
        <div className="bg-white rounded-[40px] mt-8 px-8 md:px-14 py-14 border border-gray-200 shadow-sm">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-14">

            {/* BRAND */}
            <div>

              <div className="flex items-center gap-4 mb-8">

                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
                  MK
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-black">
                    MK Unisex Salon
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Premium Grooming Studio
                  </p>

                </div>

              </div>

              <p className="text-gray-500 leading-8 max-w-md text-[15px] mb-8">

                MK Unisex Salon delivers premium haircuts,
                beard styling, facials and modern grooming
                experiences with expert stylists and luxury care.

              </p>

              {/* SOCIAL */}
              <div className="flex items-center gap-4 text-lg">

                <a
                  href="#"
                  className="text-black hover:text-yellow-500 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="text-black hover:text-yellow-500 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="text-black hover:text-yellow-500 transition"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="#"
                  className="text-black hover:text-yellow-500 transition"
                >
                  <FaGithub />
                </a>

              </div>

            </div>

            {/* SERVICES */}
            <div>

              <h3 className="font-semibold text-black mb-6">
                Services
              </h3>

              <ul className="space-y-4 text-gray-500 text-sm">

                <li className="hover:text-black transition cursor-pointer">
                  Haircut
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Beard Styling
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Hair Spa
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Facial
                </li>

              </ul>

            </div>

            {/* COMPANY */}
            <div>

              <h3 className="font-semibold text-black mb-6">
                Company
              </h3>

              <ul className="space-y-4 text-gray-500 text-sm">

                <li className="hover:text-black transition cursor-pointer">
                  About
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Gallery
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Contact
                </li>

                <li className="hover:text-black transition cursor-pointer">
                  Book Now
                </li>

              </ul>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="font-semibold text-black mb-6">
                Contact
              </h3>

              <ul className="space-y-4 text-gray-500 text-sm leading-7">

                <li>
                  Bangalore, India
                </li>

                <li>
                  +91 99999 99999
                </li>

                <li>
                  support@mkunisexsalon.com
                </li>

                <li>
                  Open: 10AM - 9PM
                </li>

              </ul>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-gray-500 text-sm">

              © {new Date().getFullYear()} MK Unisex Salon.
              All rights reserved.

            </p>

            <div className="flex gap-6 text-sm text-gray-500">

              <p className="hover:text-black transition cursor-pointer">
                Privacy Policy
              </p>

              <p className="hover:text-black transition cursor-pointer">
                Terms of Service
              </p>

              <p className="hover:text-black transition cursor-pointer">
                Cookies
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

}