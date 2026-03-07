import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SalonSettings() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/settings")
      .then((res) => setSettings(res.data));
  }, []);

  const save = () => {
    axios.put("http://localhost:5000/api/settings", settings);

    alert("Saved");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6 font-bold">Salon Timing Settings</h1>

      <input
        className="border p-2 mb-3"
        value={settings.openingTime || ""}
        onChange={(e) =>
          setSettings({ ...settings, openingTime: e.target.value })
        }
      />

      <input
        className="border p-2 mb-3"
        value={settings.closingTime || ""}
        onChange={(e) =>
          setSettings({ ...settings, closingTime: e.target.value })
        }
      />

      <input
        className="border p-2 mb-3"
        value={settings.slotDuration || ""}
        onChange={(e) =>
          setSettings({ ...settings, slotDuration: e.target.value })
        }
      />

      <button onClick={save} className="bg-black text-white px-6 py-2 rounded">
        Save
      </button>
    </div>
  );
}
