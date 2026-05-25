import React from "react";
import BookingForm from "../components/BookingForm";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-[500px] flex items-center justify-center text-white"
      >
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">MK Salon</h1>

          <p className="text-xl text-gray-200 mb-6">
            Premium Grooming Experience
          </p>

          {/* ✅ CONNECTED BUTTON */}
          <button
            onClick={() =>
              document
                .getElementById("booking")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Salon</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          <img
            src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186"
            className="rounded-xl shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
            className="rounded-xl shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">About MK Salon</h2>

          <p className="text-gray-600 text-lg">
            MK Salon provides premium grooming services including modern
            haircuts, beard styling and professional grooming.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-gray-100 p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-3">Haircut</h3>
            <p className="text-gray-600">
              Modern haircuts tailored to your style.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-3">Beard Trim</h3>
            <p className="text-gray-600">Clean beard shaping and styling.</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-3">Haircut + Beard</h3>
            <p className="text-gray-600">Complete grooming package.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <p className="text-gray-600">
          Visit MK Salon for the best grooming experience.
        </p>
      </section>
    </div>
  );
}
