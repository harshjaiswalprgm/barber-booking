
const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Invalid email" });
    }

    let validPassword = false;

    // If password is hashed
    if (admin.password.startsWith("$2")) {
      validPassword = await bcrypt.compare(password, admin.password);
    }
    // If password is plain text (dev mode)
    else {
      validPassword = password === admin.password;
    }

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET || "mksalonsecret",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (err) {

    console.error(err);
    res.status(500).json({ message: "Server error" });

  }
});

module.exports = router;