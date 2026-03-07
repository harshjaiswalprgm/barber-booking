import React from "react";
export default function SlotGrid({ slots, selected, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      {slots.map(slot => (
        <button
          key={slot.time}
          disabled={!slot.available}
          onClick={() => onSelect(slot.time)}
          className={`p-2 rounded text-sm
            ${!slot.available ? "bg-gray-300 text-gray-500" :
            selected === slot.time ? "bg-black text-white" :
            "bg-white border"}`}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
}
