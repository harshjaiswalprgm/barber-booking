// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function SalonSettings() {
//   const [settings, setSettings] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/settings")
//       .then((res) => setSettings(res.data));
//   }, []);

//   const save = () => {
//     axios.put("http://localhost:5000/api/settings", settings);

//     alert("Saved");
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl mb-6 font-bold">Salon Timing Settings</h1>

//       <input
//         className="border p-2 mb-3"
//         value={settings.openingTime || ""}
//         onChange={(e) =>
//           setSettings({ ...settings, openingTime: e.target.value })
//         }
//       />

//       <input
//         className="border p-2 mb-3"
//         value={settings.closingTime || ""}
//         onChange={(e) =>
//           setSettings({ ...settings, closingTime: e.target.value })
//         }
//       />

//       <input
//         className="border p-2 mb-3"
//         value={settings.slotDuration || ""}
//         onChange={(e) =>
//           setSettings({ ...settings, slotDuration: e.target.value })
//         }
//       />

//       <button onClick={save} className="bg-black text-white px-6 py-2 rounded">
//         Save
//       </button>
//     </div>
//   );
// }

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
    axios.get("http://localhost:5000/api/settings").then((res) => {
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
    await axios.put("http://localhost:5000/api/settings", { enabledSlots });

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




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// /* Generate full day slots */
// function generateSlots() {
//   let slots = [];

//   for (let hour = 0; hour < 24; hour++) {
//     for (let min of [0, 30]) {
//       let h = hour % 12;
//       h = h === 0 ? 12 : h;

//       const period = hour < 12 ? "AM" : "PM";
//       const minute = min === 0 ? "00" : "30";

//       slots.push({
//         label: `${h}:${minute} ${period}`,
//         hour
//       });
//     }
//   }

//   return slots;
// }

// const allSlots = generateSlots();

// /* Group slots */
// const groupSlots = (slots) => {
//   return {
//     Morning: slots.filter(s => s.hour >= 6 && s.hour < 12),
//     Afternoon: slots.filter(s => s.hour >= 12 && s.hour < 17),
//     Evening: slots.filter(s => s.hour >= 17 && s.hour < 21),
//     Night: slots.filter(s => s.hour >= 21 || s.hour < 6),
//   };
// };

// export default function SalonSettings() {

//   const [enabledSlots, setEnabledSlots] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/settings")
//       .then(res => {
//         setEnabledSlots(res.data.enabledSlots || []);
//       });
//   }, []);

//   const toggleSlot = (slot) => {
//     if (enabledSlots.includes(slot)) {
//       setEnabledSlots(enabledSlots.filter(s => s !== slot));
//     } else {
//       setEnabledSlots([...enabledSlots, slot]);
//     }
//   };

//   const save = async () => {
//     try {
//       setLoading(true);

//       await axios.post(
//         "http://localhost:5000/api/settings",
//         { enabledSlots }
//       );

//       alert("Salon timings updated");

//     } catch (err) {
//       alert("Failed to save");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const grouped = groupSlots(allSlots);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-10">

//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl font-bold text-yellow-400 mb-4 text-center"
//       >
//         Salon Timing Settings
//       </motion.h1>

//       <p className="text-center text-gray-400 mb-10">
//         Select which time slots customers can book
//       </p>

//       {/* Slot Sections */}
//       <div className="space-y-10 max-w-6xl mx-auto">

//         {Object.entries(grouped).map(([section, slots]) => (

//           <div key={section}>

//             <h2 className="text-xl font-semibold mb-4 text-yellow-300">
//               {section}
//             </h2>

//             <div className="grid grid-cols-3 md:grid-cols-6 gap-3">

//               {slots.map(({ label }) => {
//                 const active = enabledSlots.includes(label);

//                 return (
//                   <motion.button
//                     key={label}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => toggleSlot(label)}
//                     className={`p-3 rounded-xl text-sm font-medium border transition-all duration-300
//                       ${active
//                         ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/40"
//                         : "bg-white/10 border-gray-700 text-gray-300 hover:bg-gray-800"}
//                     `}
//                   >
//                     {label}
//                   </motion.button>
//                 );
//               })}

//             </div>

//           </div>

//         ))}

//       </div>

//       {/* Save Button */}
//       <div className="fixed bottom-6 right-6">

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={save}
//           disabled={loading}
//           className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-yellow-400 transition"
//         >
//           {loading ? "Saving..." : "Save Changes"}
//         </motion.button>

//       </div>

//     </div>
//   );
// }