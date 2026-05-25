
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // VERY IMPORTANT for req.body

// ✅ Debug route
app.get("/", (req, res) => {
  res.send("MK Salon Backend Running 🚀");
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Error:", err.message);
    process.exit(1); // stop server if DB fails
  });

// ✅ Routes
app.use("/api/auth", require("./routes/auth")); // LOGIN IS HERE
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/services", require("./routes/services"));
app.use("/api/settings", require("./routes/settings"));

// ❗ Catch unknown routes (helps debugging 400/404 confusion)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ❗ Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});