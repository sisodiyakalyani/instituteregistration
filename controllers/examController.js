// controllers/examController.js
const Exam = require('../models/Exam');

// Get all exams
exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exams', details: err.message });
  }
};

// Add a new exam
exports.createExam = async (req, res) => {
  try {
    const newExam = new Exam({ exam_name: req.body.exam_name });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create exam', details: err.message });
  }
};
