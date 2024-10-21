// controllers/universityController.js
const University = require('../models/University');

// Get all universities
exports.getAllUniversities = async (req, res) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch universities', details: err.message });
  }
};

// Add a new university
exports.createUniversity = async (req, res) => {
  try {
    const newUniversity = new University({ name: req.body.name });
    await newUniversity.save();
    res.status(201).json(newUniversity);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create university', details: err.message });
  }
};
