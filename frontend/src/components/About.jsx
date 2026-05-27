import React from "react";
import { Scissors, Star, Sparkles, Crown } from "lucide-react";

export default function About() {
  return (

    <section
      id="about"
      className="bg-[#f8f5ef] py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* TOP HEADING */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">

        <div>
          <p className="uppercase tracking-[6px] text-sm text-gray-500 mb-3">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-black leading-tight">
            MK UNISEX <br /> SALON
          </h1>
        </div>

        <div className="max-w-xl">

          <p className="text-gray-600 text-lg leading-8">
            At MK Unisex Salon, we believe grooming is more than
            just a haircut — it’s confidence, personality, and
            style. Our expert stylists deliver premium salon
            experiences with modern trends, luxury care, and
            personalized attention.
          </p>

          <button className="mt-8 border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition duration-300 font-medium">
            Talk to Us ↗
          </button>

        </div>

      </div>

      {/* IMAGE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">

        {/* Left Image */}
        <div className="overflow-hidden rounded-[30px] h-[450px] group">

          <img
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        {/* Center Image */}
        <div className="overflow-hidden rounded-[30px] h-[450px] group">

          <img
            src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        {/* Right Text Card */}
        <div className="bg-black text-white rounded-[30px] p-10 flex flex-col justify-between relative overflow-hidden">

          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>

          <div>

            <p className="uppercase tracking-[5px] text-yellow-400 text-sm mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Premium Grooming <br /> Experience
            </h2>

            <p className="text-gray-300 leading-8">
              We combine luxury interiors, skilled stylists,
              modern tools, and personalized grooming to create
              a salon experience that feels world-class.
            </p>

          </div>

          <div className="mt-10">

            <button className="bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
              Book Appointment
            </button>

          </div>

        </div>

      </div>

      {/* BIG TEXT */}
      <div className="mb-24">

        <h2 className="text-3xl md:text-5xl leading-snug font-light text-black max-w-6xl">

          <span className="text-yellow-500 font-semibold">
            Luxury grooming,
          </span>{" "}

          expert styling, and premium care are the foundations
          of our salon philosophy. We focus on helping every
          customer look sharp, feel confident, and enjoy a
          relaxing salon experience.

        </h2>

      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* CARD 1 */}
        <div className="bg-black text-white rounded-[30px] p-10 min-h-[300px] flex flex-col justify-between hover:-translate-y-2 transition duration-500">

          <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center mb-8">
            <Scissors size={30} className="text-black" />
          </div>

          <div>

            <p className="text-gray-500 text-2xl mb-3">
              01.
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Expert Stylists
            </h3>

            <p className="text-gray-400 leading-7">
              Skilled professionals delivering trendy cuts,
              styling, coloring, and grooming services.
            </p>

          </div>

        </div>

        {/* CARD 2 */}
        <div className="bg-white border border-gray-200 rounded-[30px] p-10 min-h-[300px] hover:-translate-y-2 transition duration-500">

          <Star className="text-yellow-500 mb-8" size={40} />

          <p className="text-gray-400 text-2xl mb-3">
            02.
          </p>

          <h3 className="text-3xl font-bold mb-4 text-black">
            Premium Service
          </h3>

          <p className="text-gray-600 leading-7">
            Enjoy luxury salon experiences with top-quality
            products and customer-first service.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-white border border-gray-200 rounded-[30px] p-10 min-h-[300px] hover:-translate-y-2 transition duration-500">

          <Sparkles className="text-yellow-500 mb-8" size={40} />

          <p className="text-gray-400 text-2xl mb-3">
            03.
          </p>

          <h3 className="text-3xl font-bold mb-4 text-black">
            Modern Trends
          </h3>

          <p className="text-gray-600 leading-7">
            From fades to facials, beard styling to hair spa —
            we stay updated with latest trends.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="bg-white border border-gray-200 rounded-[30px] p-10 min-h-[300px] hover:-translate-y-2 transition duration-500">

          <Crown className="text-yellow-500 mb-8" size={40} />

          <p className="text-gray-400 text-2xl mb-3">
            04.
          </p>

          <h3 className="text-3xl font-bold mb-4 text-black">
            Luxury Ambience
          </h3>

          <p className="text-gray-600 leading-7">
            Relax in our stylish salon atmosphere designed for
            comfort, elegance, and premium grooming.
          </p>

        </div>

      </div>

    </section>

  );
}