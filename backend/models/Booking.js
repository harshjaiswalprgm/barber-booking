// models/Booking.js
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: String,       // YYYY-MM-DD
  time: String,       // HH:mm
  status: {
    type: String,
    default: "booked" // booked, cancelled, completed
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);
