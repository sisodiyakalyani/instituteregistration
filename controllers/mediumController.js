// controllers/mediumController.js
const Medium = require('../models/Medium');

// Get all mediums
exports.getAllMediums = async (req, res) => {
  try {
    const mediums = await Medium.find();
    res.json(mediums);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch mediums', details: err.message });
  }
};

// Add a new medium
exports.createMedium = async (req, res) => {
  try {
    const newMedium = new Medium({ name: req.body.name });
    await newMedium.save();
    res.status(201).json(newMedium);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create medium', details: err.message });
  }
};
