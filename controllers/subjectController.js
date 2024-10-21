// controllers/subjectController.js
const Subject = require('../models/Subject');

// Get subjects by standard
exports.getSubjectsByStandard = async (req, res) => {
  try {
    const subjects = await Subject.find({ standard: req.params.standardId });
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subjects', details: err.message });
  }
};

// Add a new subject
exports.createSubject = async (req, res) => {
  try {
    const newSubject = new Subject({
      subject_name: req.body.subject_name,
      standard: req.body.standard
    });
    await newSubject.save();
    res.status(201).json(newSubject);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create subject', details: err.message });
  }
};
