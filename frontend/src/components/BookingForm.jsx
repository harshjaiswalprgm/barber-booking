
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import SlotGrid from "./SlotGrid";

export default function BookingForm() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Haircut");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [loading, setLoading] = useState(false);

  const [slots, setSlots] = useState([]);

  // Fetch slots when date changes
  useEffect(() => {

    if (!date) return;

    axios
      .get(`http://localhost:5000/api/bookings/slots?date=${date}`)
      .then((res) => {
        setSlots(res.data);
      })
      .catch((err) => console.log(err));

  }, [date]);

  const availableCount = slots.filter((s) => s.available).length;

  const handleBook = async () => {

    if (!name || !phone || !date || !slot) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/bookings",
        {
          name,
          phone,
          service,
          date,
          time: slot,
        }
      );

      alert("Booking Confirmed!");

      window.open(
        `https://wa.me/91${phone}?text=Your MK Salon booking is confirmed at ${slot}`,
        "_blank"
      );

      setName("");
      setPhone("");
      setService("Haircut");
      setDate("");
      setSlot("");

    } catch (error) {

      alert(error.response?.data?.error || "Booking failed. Try again.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl"
      >

        <div className="bg-white/10 backdrop-blur-xl border border-gray-700 shadow-2xl rounded-3xl p-10 text-white">

          <h1 className="text-3xl font-bold text-center mb-2 text-yellow-400">
            MK Salon
          </h1>

          <p className="text-center text-gray-300 mb-8">
            Premium Grooming Experience
          </p>

          {/* Name */}
          <div className="mb-5">
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-3 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label className="text-sm text-gray-300">Phone Number</label>
            <input
              type="text"
              placeholder="9876543210"
              className="w-full mt-1 p-3 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Service */}
          <div className="mb-5">
            <label className="text-sm text-gray-300">Select Service</label>
            <select
              className="w-full mt-1 p-3 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option className="text-black">Haircut</option>
              <option className="text-black">Beard Trim</option>
              <option className="text-black">Haircut + Beard</option>
            </select>
          </div>

          {/* Date */}
          <div className="mb-5">
            <label className="text-sm text-gray-300">Select Date</label>
            <input
              type="date"
              className="w-full mt-1 p-3 rounded-xl bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Slots left */}
          <p className="text-sm text-gray-300 mb-3">
            Only <span className="text-yellow-400 font-bold">{availableCount}</span> slots left today
          </p>

          {/* Slot Grid */}
          <div className="mb-6">
            <SlotGrid slots={slots} selected={slot} onSelect={setSlot} />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleBook}
            disabled={loading}
            className="w-full bg-yellow-500 text-black py-3 rounded-2xl font-bold shadow-lg hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
}