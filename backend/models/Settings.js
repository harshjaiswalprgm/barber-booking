// // models/Settings.js
// const mongoose = require("mongoose");

// const SettingsSchema = new mongoose.Schema({
//   openTime: String,   // "10:00"
//   closeTime: String,  // "20:00"
//   slotDuration: Number,
//   bufferTime: Number
// });

// module.exports = mongoose.model("Settings", SettingsSchema);

const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({

  enabledSlots: {
    type: [String],
    default: []
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Settings", SettingsSchema);