// controllers/instituteTypeController.js
const InstituteType = require('../models/InstituteType');

// Get all institute types
exports.getAllInstituteTypes = async (req, res) => {
  try {
    const types = await InstituteType.find();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch institute types', details: err.message });
  }
};

// Add a new institute type
exports.createInstituteType = async (req, res) => {
  try {
    const newType = new InstituteType({ type_name: req.body.type_name });
    await newType.save();
    res.status(201).json(newType);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create institute type', details: err.message });
  }
};
