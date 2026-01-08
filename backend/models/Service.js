// models/Service.js
const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: String,
  duration: Number, // minutes
  price: Number
});

module.exports = mongoose.model("Service", ServiceSchema);
