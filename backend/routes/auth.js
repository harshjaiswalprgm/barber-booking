// routes/auth.js
const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(400).json("Invalid");

  const match = await bcrypt.compare(req.body.password, admin.password);
  if (!match) return res.status(400).json("Invalid");

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
