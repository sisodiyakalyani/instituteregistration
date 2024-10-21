// models/Exam.js
const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  exam_name: { type: String, required: true, unique: true } // e.g., JEE, NEET
});

module.exports = mongoose.model('Exam', ExamSchema);
