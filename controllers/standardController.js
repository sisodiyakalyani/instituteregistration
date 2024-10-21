// controllers/standardController.js
const Standard = require('../models/Standard');

// Get standards by class category
exports.getStandardsByClassCategory = async (req, res) => {
  try {
    const standards = await Standard.find({ class_category: req.params.classCategoryId });
    res.json(standards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch standards', details: err.message });
  }
};

// Add a new standard
exports.createStandard = async (req, res) => {
  try {
    const newStandard = new Standard({
      standard_name: req.body.standard_name,
      class_category: req.body.class_category
    });
    await newStandard.save();
    res.status(201).json(newStandard);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create standard', details: err.message });
  }
};
