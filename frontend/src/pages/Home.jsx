import React from "react";
import {
  ArrowUpRight,
  Scissors,
  Star,
  Sparkles,
} from "lucide-react";

export default function Home() {

  return (

    <div className="bg-[#0a0a0a] overflow-hidden text-white">

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen px-5 md:px-10 pt-32 pb-20"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[1fr_1.1fr_0.5fr] gap-5 items-stretch">

            {/* LEFT CONTENT */}
            <div className="bg-[#111111] rounded-[36px] p-8 md:p-12 flex flex-col justify-between border border-white/10 relative overflow-hidden">

              {/* Glow */}
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <p className="uppercase tracking-[5px] text-yellow-400 text-xs mb-8">
                  MK UNISEX SALON
                </p>

                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">

                  Elevate

                  <br />

                  Your Style

                </h1>

                <p className="text-gray-400 leading-8 text-[15px] max-w-sm mb-10">

                  Premium barbering experience with luxury
                  grooming, modern fades, beard styling,
                  facials, and personalized hair care.

                </p>

                <button
                  onClick={() =>
                    document
                      .getElementById("booking")
                      .scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="group bg-yellow-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 hover:bg-yellow-300 transition duration-300 shadow-2xl"
                >

                  Book Appointment

                  <ArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition"
                  />

                </button>

              </div>

              {/* Bottom */}
              <div className="relative z-10 mt-16 border-t border-white/10 pt-6">

                <div className="flex items-center gap-4">

                  <div className="flex -space-x-3">

                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-12 h-12 rounded-full border-2 border-black object-cover"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/men/41.jpg"
                      className="w-12 h-12 rounded-full border-2 border-black object-cover"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-12 h-12 rounded-full border-2 border-black object-cover"
                    />

                  </div>

                  <div>

                    <p className="text-white font-semibold">
                      500+ Happy Customers
                    </p>

                    <p className="text-gray-500 text-sm">
                      Trusted premium grooming experience
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* CENTER IMAGE */}
            <div className="relative rounded-[36px] overflow-hidden min-h-[650px] border border-yellow-500/20 group">

              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-5 shadow-2xl">

                <p className="text-yellow-400 uppercase tracking-[4px] text-xs mb-2">
                  Premium Salon
                </p>

                <h3 className="text-3xl font-bold">
                  Since 2018
                </h3>

              </div>

            </div>

            {/* RIGHT STATS */}
            <div className="flex flex-col gap-5">

              {/* CARD */}
              <div className="bg-[#111111] rounded-[30px] p-8 border border-white/10 flex-1 hover:-translate-y-2 transition duration-500 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full"></div>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-8">
                    <Star size={28} />
                  </div>

                  <h2 className="text-5xl font-black text-yellow-400 mb-2">
                    1000+
                  </h2>

                  <p className="text-white text-xl font-semibold mb-3">
                    Satisfied Customers
                  </p>

                  <p className="text-gray-500 leading-7 text-sm">
                    Delivering exceptional grooming and luxury
                    salon experiences.
                  </p>

                </div>

              </div>

              {/* CARD */}
              <div className="bg-[#111111] rounded-[30px] p-8 border border-white/10 flex-1 hover:-translate-y-2 transition duration-500">

                <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-8">
                  <Scissors size={28} />
                </div>

                <h2 className="text-5xl font-black text-yellow-400 mb-2">
                  06+
                </h2>

                <p className="text-white text-xl font-semibold mb-3">
                  Expert Artists
                </p>

                <p className="text-gray-500 leading-7 text-sm">
                  Professional stylists specialized in modern
                  cuts, fades, beard styling and hair care.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-[#111111] rounded-[30px] p-8 border border-white/10 flex-1 hover:-translate-y-2 transition duration-500">

                <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-8">
                  <Sparkles size={28} />
                </div>

                <h2 className="text-5xl font-black text-yellow-400 mb-2">
                  15+
                </h2>

                <p className="text-white text-xl font-semibold mb-3">
                  Years Experience
                </p>

                <p className="text-gray-500 leading-7 text-sm">
                  Combining experience, luxury ambience and
                  modern styling trends.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}