const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const Settings = require("../models/Settings");
const generateSlots = require("../utils/generateSlots");

/**
 * GET AVAILABLE SLOTS (PUBLIC)
 * /api/bookings/slots?date=YYYY-MM-DD
 */
router.get("/slots", async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ error: "Date is required" });
    }

    const settings = await Settings.findOne();
    if (!settings) {
      return res.status(400).json({ error: "Salon settings not configured" });
    }

    const allSlots = generateSlots(
      settings.openTime,
      settings.closeTime,
      settings.slotDuration,
      settings.bufferTime
    );

    const bookings = await Booking.find({ date, status: "booked" }).select("time");
    const bookedTimes = bookings.map(b => b.time);

    const slots = allSlots.map(time => ({
      time,
      available: !bookedTimes.includes(time)
    }));

    res.json(slots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate slots" });
  }
});

/**
 * CREATE BOOKING (PUBLIC)
 * /api/bookings
 */
router.post("/", async (req, res) => {
  try {
    const { name, phone, service, date, time } = req.body;

    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existing = await Booking.findOne({
      date,
      time,
      status: "booked"
    });

    if (existing) {
      return res.status(400).json({ error: "Slot already booked" });
    }

    const booking = new Booking({
      name,
      phone,
      service,
      date,
      time
    });

    await booking.save();

    res.json({
      message: "Booking confirmed",
      bookingId: booking._id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Booking failed" });
  }
});

/**
 * ADMIN – GET ALL BOOKINGS
 */
router.get("/all", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

/**
 * ADMIN – UPDATE BOOKING STATUS
 */
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    await Booking.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Status updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update status" });
  }
});

module.exports = router;
