import React, { useState, useEffect } from "react";
import axios from "axios";

/* Generate full day slots (30 min interval) */
function generateSlots() {
  let slots = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let min of [0, 30]) {
      let h = hour % 12;
      h = h === 0 ? 12 : h;

      const period = hour < 12 ? "AM" : "PM";
      const minute = min === 0 ? "00" : "30";

      slots.push(`${h}:${minute} ${period}`);
    }
  }

  return slots;
}

const allSlots = generateSlots();

export default function SalonSettings() {
  const [enabledSlots, setEnabledSlots] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/settings`).then((res) => {
      setEnabledSlots(res.data.enabledSlots || []);
    });
  }, []);

  const toggleSlot = (slot) => {
    if (enabledSlots.includes(slot)) {
      setEnabledSlots(enabledSlots.filter((s) => s !== slot));
    } else {
      setEnabledSlots([...enabledSlots, slot]);
    }
  };

  const save = async () => {
    await axios.put(`${import.meta.env.VITE_API_URL}/api/settings`, { enabledSlots });

    alert("Salon timings updated");
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Salon Timing Settings</h1>

      <p className="mb-6 text-gray-600">
        Turn ON slots that customers can book.
      </p>

      <div className="grid grid-cols-6 gap-3">
        {allSlots.map((slot) => {
          const active = enabledSlots.includes(slot);

          return (
            <button
              key={slot}
              onClick={() => toggleSlot(slot)}
              className={`p-3 rounded-lg border text-sm font-medium transition
${
  active
    ? "bg-green-500 text-white border-green-500"
    : "bg-gray-200 text-gray-700 border-gray-300"
}
`}
            >
              {slot}
            </button>
          );
        })}
      </div>

      <button
        onClick={save}
        className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Save Changes
      </button>
    </div>
  );
}
