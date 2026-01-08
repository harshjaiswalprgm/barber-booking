const router = require("express").Router();
const Settings = require("../models/Settings");

// 🔹 Get current settings (public – for slots)
router.get("/", async (req, res) => {
  try {
    let settings = await Settings.findOne();

    // If settings not present, create default
    if (!settings) {
      settings = await Settings.create({
        openTime: "10:00",
        closeTime: "20:00",
        slotDuration: 30,
        bufferTime: 0
      });
    }

    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
});

// 🔹 Update settings (admin only – later we protect with JWT)
router.post("/", async (req, res) => {
  try {
    const { openTime, closeTime, slotDuration, bufferTime } = req.body;

    let settings = await Settings.findOne();

    if (!settings) {
      settings = new Settings(req.body);
    } else {
      settings.openTime = openTime;
      settings.closeTime = closeTime;
      settings.slotDuration = slotDuration;
      settings.bufferTime = bufferTime;
    }

    await settings.save();
    res.json({ message: "Settings updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update settings" });
  }
});

module.exports = router;
