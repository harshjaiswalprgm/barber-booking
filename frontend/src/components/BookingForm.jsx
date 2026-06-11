import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Phone,
  User,
  Scissors,
  Sparkles,
  Crown,
  ArrowUpRight,
} from "lucide-react";

import SlotGrid from "./SlotGrid";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Haircut");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Hair Services");

  const [slots, setSlots] = useState([]);
  const services = {
    "Hair Services": [
      "Haircut",
      "Hair Wash",
      "Blow Dry",
      "Hair Colour",
      "Root Touch Up",
      "Global Hair Colour",
    ],

    "Hair Treatments": [
      "Keratin Treatment",
      "Keratin Botox",
      "Smoothening",
      "Kerasmooth",
      "Nanoplastia Organic",
      "Protein Treatment",
      "Moisture Therapy",
    ],

    "Hair Spa": [
      "Matrix Hair Spa",
      "Loreal Hair Spa",
      "Keratin Hair Spa",
      "Botox Hair Spa",
      "Anti Dandruff Hair Spa",
      "Anti Hair Fall Hair Spa",
    ],

    "Facial & Cleanup": [
      "Fruit Facial",
      "Aroma Facial",
      "Lotus Facial",
      "Wine Facial",
      "Diamond Glow Facial",
      "Basic De Tan",
      "Ozone De Tan",
      "O3+ De Tan",
      "Hydra Facial",
    ],

    Waxing: [
      "Full Arms Wax",
      "Full Legs Wax",
      "Honey Wax",
      "Chocolate Wax",
      "Rica Wax",
    ],

    Massage: ["Head Massage", "Body Massage"],

    "Men Packages": [
      "Haircut + Beard",
      "Haircut + Hair Spa",
      "Haircut + Head Massage",
      "Haircut + Beard + Hair Spa",
    ],

    "Special Offers": [
      "Botox Treatment",
      "Keratin Treatment Offer",
      "Highlight Balayage",
      "Premium Facial Combo",
      "Premium De Tan Cleanup",
    ],
  };

  // FETCH SLOTS
  useEffect(() => {
    if (!date) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/bookings/slots?date=${date}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setSlots(res.data);
        } else {
          setSlots([]);
        }
      })
      .catch(() => {
        setSlots([]);
      });
  }, [date]);

  // AVAILABLE COUNT
  const availableCount = Array.isArray(slots)
    ? slots.filter((s) => s.available).length
    : 0;

  // BOOK
  const handleBook = async () => {
    if (!name || !phone || !date || !slot) {
      alert("Please fill all fields");

      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings`,

        {
          name,
          phone,
          service,
          date,
          time: slot,
        },
      );

      alert("Booking Confirmed!");

      setName("");
      setPhone("");
      setService("Haircut");
      setDate("");
      setSlot("");
    } catch (error) {
      alert(error.response?.data?.error || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="bg-[#0b0b0b] py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">
          {/* LEFT SIDE */}
          <div className="relative p-10 md:p-14 bg-[#0d0d0d] flex flex-col justify-between min-h-[760px] overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10">
              <p className="uppercase tracking-[5px] text-yellow-400 text-xs mb-5">
                MK UNISEX SALON
              </p>

              <h1 className="text-[52px] md:text-[72px] leading-[0.9] tracking-[-3px] font-black text-white mb-8">
                Book Your
                <br />
                <span className="text-yellow-400">Style</span>
              </h1>

              <p className="text-gray-400 leading-8 text-[15px] max-w-sm">
                Luxury grooming, modern cuts, beard styling and premium salon
                experience designed for confidence.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative rounded-[28px] overflow-hidden mt-12 h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-5 left-5">
                <p className="text-yellow-400 text-xs tracking-[4px] uppercase mb-1">
                  Since 2018
                </p>

                <h3 className="text-white text-3xl font-bold">
                  Premium Grooming
                </h3>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white/[0.03] border border-white/10 rounded-[24px] p-5">
                <Scissors size={22} className="text-yellow-400 mb-4" />

                <h3 className="text-3xl font-black text-white">500+</h3>

                <p className="text-gray-500 text-sm mt-1">Haircuts</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-[24px] p-5">
                <Sparkles size={22} className="text-yellow-400 mb-4" />

                <h3 className="text-3xl font-black text-white">4.9★</h3>

                <p className="text-gray-500 text-sm mt-1">Ratings</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-[24px] p-5">
                <Crown size={22} className="text-yellow-400 mb-4" />

                <h3 className="text-3xl font-black text-white">15+</h3>

                <p className="text-gray-500 text-sm mt-1">Years</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#f5f1ea] px-10 md:px-14 py-14 flex flex-col justify-center">
            <div className="max-w-lg mx-auto w-full">
              {/* HEADER */}
              <div className="mb-10">
                <p className="uppercase tracking-[5px] text-gray-500 text-xs mb-4">
                  Appointment Form
                </p>

                <h2 className="text-[48px] leading-[1] tracking-[-2px] font-black text-black mb-5">
                  Book an
                  <br />
                  Appointment
                </h2>

                <p className="text-gray-600 leading-7 text-[15px]">
                  Choose your preferred service and appointment slot for a
                  premium salon visit.
                </p>
              </div>

              {/* SERVICES */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Service Category
                  </label>

                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setService(services[e.target.value][0]);
                    }}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 outline-none"
                  >
                    {Object.keys(services).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Select Service
                  </label>

                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-4 outline-none"
                  >
                    {services[category].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* INPUTS */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* NAME */}
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Your Name
                  </label>

                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3">
                    <User size={18} className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="Full Name "
                      className="bg-transparent outline-none w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Phone Number
                  </label>

                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3">
                    <Phone size={18} className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="9876543210"
                      className="bg-transparent outline-none w-full"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* DATE */}
              <div className="mb-8">
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Schedule Date
                </label>

                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex items-center gap-3">
                  <CalendarDays size={18} className="text-gray-400" />

                  <input
                    type="date"
                    className="bg-transparent outline-none w-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              {/* SLOT HEADER */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-black">
                  Available Slots
                </h3>

                <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {availableCount} Slots
                </div>
              </div>

              {/* SLOT GRID */}
              <div className="mb-8">
                <SlotGrid slots={slots} selected={slot} onSelect={setSlot} />
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBook}
                disabled={loading}
                className="w-full bg-black hover:bg-yellow-400 hover:text-black text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition duration-300"
              >
                {loading ? "Booking..." : "Confirm Appointment"}

                <ArrowUpRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
