import { useState } from "react";
import SlotGrid from "./SlotGrid";
import { mockSlots } from "../data/mockSlots";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Haircut");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const availableCount = mockSlots.filter(s => s.available).length;

  const handleBook = () => {
    if (!name || !phone || !date || !slot) {
      alert("Please fill all fields");
      return;
    }

    alert(`Booking confirmed at ${slot}`);

    window.open(
      `https://wa.me/91${phone}?text=Your%20MK%20Salon%20booking%20is%20confirmed%20at%20${slot}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <input
        placeholder="Your Name"
        className="w-full border p-2 mb-2"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Phone Number"
        className="w-full border p-2 mb-2"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />

      <select
        className="w-full border p-2 mb-2"
        value={service}
        onChange={e => setService(e.target.value)}
      >
        <option>Haircut</option>
        <option>Beard Trim</option>
        <option>Haircut + Beard</option>
      </select>

      <input
        type="date"
        className="w-full border p-2 mb-2"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <p className="text-sm mb-2">
        Only <b>{availableCount}</b> slots left today
      </p>

      <SlotGrid
        slots={mockSlots}
        selected={slot}
        onSelect={setSlot}
      />

      <button
        onClick={handleBook}
        className="w-full bg-black text-white py-2 mt-4 rounded"
      >
        Book Now
      </button>
    </div>
  );
}
