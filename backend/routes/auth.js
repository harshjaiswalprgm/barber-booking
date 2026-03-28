
// const router = require("express").Router();
// const Admin = require("../models/Admin");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// router.post("/login", async (req, res) => {
//   try {

//     const { email, password } = req.body;

//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       return res.status(400).json({ message: "Invalid email" });
//     }

//     let validPassword = false;

//     // If password is hashed
//     if (admin.password.startsWith("$2")) {
//       validPassword = await bcrypt.compare(password, admin.password);
//     }
//     // If password is plain text (dev mode)
//     else {
//       validPassword = password === admin.password;
//     }

//     if (!validPassword) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign(
//       { id: admin._id },
//       process.env.JWT_SECRET || "mksalonsecret",
//       { expiresIn: "7d" }
//     );

//     res.json({
//       message: "Login successful",
//       token
//     });

//   } catch (err) {

//     console.error(err);
//     res.status(500).json({ message: "Server error" });

//   }
// });


// module.exports = router;

const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ✅ ADMIN LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email & Password required" });
    }

    console.log("📩 Login attempt:", email);

    // ✅ 2. Find admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.log("❌ Admin not found");
      return res.status(400).json({ message: "Invalid email" });
    }

    console.log("✅ Admin found");

    let validPassword = false;

    // ✅ 3. Handle hashed + plain safely
    try {
      validPassword = await bcrypt.compare(password, admin.password);
    } catch (err) {
      // fallback if password is plain text (old DB)
      validPassword = password === admin.password;
    }

    if (!validPassword) {
      console.log("❌ Wrong password");
      return res.status(400).json({ message: "Invalid password" });
    }

    console.log("✅ Password correct");

    // ✅ 4. Generate token with role
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET || "mksalonsecret",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });

  } catch (err) {
    console.error("🔥 LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;