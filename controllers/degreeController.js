// controllers/degreeController.js
const Degree = require('../models/Degree');

// Get all degrees
exports.getAllDegrees = async (req, res) => {
  try {
    const degrees = await Degree.find();
    res.json(degrees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch degrees', details: err.message });
  }
};

// Add a new degree
exports.createDegree = async (req, res) => {
  try {
    const newDegree = new Degree({ degree_type: req.body.degree_type });
    await newDegree.save();
    res.status(201).json(newDegree);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create degree', details: err.message });
  }
};
