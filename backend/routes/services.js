const router = require("express").Router();
const Service = require("../models/Service");

// 🔹 Get all services (public)
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

// 🔹 Add service (admin)
router.post("/", async (req, res) => {
  try {
    const { name, duration, price } = req.body;

    const service = new Service({
      name,
      duration,
      price
    });

    await service.save();
    res.json({ message: "Service added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add service" });
  }
});

// 🔹 Delete service (admin)
router.delete("/:id", async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete service" });
  }
});

module.exports = router;
