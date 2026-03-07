import React from "react";
import BookingForm from "../components/BookingForm";

export default function Home() {
  return (
    <div className="bg-gray-100">

      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center text-white">

        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            MK Salon
          </h1>

          <p className="text-xl text-gray-200 mb-6">
            Premium Grooming Experience
          </p>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400">
            Book Appointment
          </button>
        </div>

      </section>


      {/* CAROUSEL */}
      <section className="py-16 bg-white">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Salon
        </h2>

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
      <section className="py-20 bg-gray-100">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-6">
            About MK Salon
          </h2>

          <p className="text-gray-600 text-lg">
            MK Salon provides premium grooming services including modern
            haircuts, beard styling and professional grooming. Our goal is to
            deliver a relaxing experience with expert stylists and the latest
            trends in men's grooming.
          </p>

        </div>

      </section>


      {/* SERVICES */}
      <section className="py-20 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-gray-100 p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-3">
              Haircut
            </h3>
            <p className="text-gray-600">
              Modern haircuts tailored to your style.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-3">
              Beard Trim
            </h3>
            <p className="text-gray-600">
              Clean beard shaping and styling.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl text-center shadow">
            <h3 className="text-xl font-semibold mb-3">
              Haircut + Beard
            </h3>
            <p className="text-gray-600">
              Complete grooming package.
            </p>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MK Salon
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">
              Experienced Stylists
            </h3>
            <p className="text-gray-600">
              Our barbers are highly skilled professionals.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">
              Modern Styles
            </h3>
            <p className="text-gray-600">
              We follow the latest grooming trends.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">
              Premium Experience
            </h3>
            <p className="text-gray-600">
              Comfortable and relaxing salon environment.
            </p>
          </div>

        </div>

      </section>


      {/* BOOKING */}
      <section className="py-20 bg-white">

        <h2 className="text-3xl font-bold text-center mb-10">
          Book Appointment
        </h2>

        <BookingForm />

      </section>


      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">

        <p className="text-gray-400">
          © 2026 MK Salon. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}