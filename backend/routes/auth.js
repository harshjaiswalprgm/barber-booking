
// const router = require("express").Router();
// const Admin = require("../models/Admin");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // ✅ ADMIN LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // ✅ 1. Validate input
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email & Password required" });
//     }

//     console.log("📩 Login attempt:", email);

//     // ✅ 2. Find admin
//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       console.log("❌ Admin not found");
//       return res.status(400).json({ message: "Invalid email" });
//     }

//     console.log("✅ Admin found");

//     let validPassword = false;

//     // ✅ 3. Handle hashed + plain safely
//     try {
//       validPassword = await bcrypt.compare(password, admin.password);
//     } catch (err) {
//       // fallback if password is plain text (old DB)
//       validPassword = password === admin.password;
//     }

//     if (!validPassword) {
//       console.log("❌ Wrong password");
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     console.log("✅ Password correct");

//     // ✅ 4. Generate token with role
//     const token = jwt.sign(
//       { id: admin._id, role: "admin" },
//       process.env.JWT_SECRET || "mksalonsecret",
//       { expiresIn: "7d" }
//     );

//     res.json({
//       message: "Login successful",
//       token,
//       admin: {
//         id: admin._id,
//         email: admin.email,
//       },
//     });

//   } catch (err) {
//     console.error("🔥 LOGIN ERROR:", err);
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

    // ✅ Validate input
    if (!email || !password) {

      return res.status(400).json({
        message: "Email & Password required"
      });

    }

    console.log("📩 Login attempt:", email);

    // ✅ Find admin
    const admin = await Admin.findOne({ email });

    if (!admin) {

      console.log("❌ Admin not found");

      return res.status(400).json({
        message: "Invalid email"
      });

    }

    console.log("✅ Admin found");

    let validPassword = false;

    // ✅ Compare hashed password
    try {

      validPassword = await bcrypt.compare(
        password,
        admin.password
      );

    } catch (err) {

      // fallback if old plain password exists
      validPassword = password === admin.password;

    }

    // ✅ Wrong password
    if (!validPassword) {

      console.log("❌ Wrong password");

      return res.status(400).json({
        message: "Invalid password"
      });

    }

    console.log("✅ Password correct");

    // ✅ Generate JWT token
    const token = jwt.sign(

      {
        id: admin._id,
        role: "admin"
      },

      process.env.JWT_SECRET || "mk_salon_secret",

      {
        expiresIn: "7d"
      }

    );

    // ✅ Success response
    res.status(200).json({

      message: "Login successful",

      token,

      admin: {

        id: admin._id,
        email: admin.email

      }

    });

  } catch (err) {

    console.error("🔥 LOGIN ERROR:", err);

    res.status(500).json({

      message: "Server error"

    });

  }

});


// ✅ CREATE NEW ADMIN
router.post("/create-admin", async (req, res) => {

  try {

    const { email, password } = req.body;

    // ✅ Validate
    if (!email || !password) {

      return res.status(400).json({
        message: "Email & Password required"
      });

    }

    // ✅ Check existing
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {

      return res.status(400).json({
        message: "Admin already exists"
      });

    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create admin
    const admin = new Admin({

      email,
      password: hashedPassword

    });

    await admin.save();

    console.log("✅ New admin created");

    res.status(201).json({

      message: "Admin created successfully"

    });

  } catch (err) {

    console.error("🔥 CREATE ADMIN ERROR:", err);

    res.status(500).json({

      message: "Server error"

    });

  }

});


module.exports = router;
