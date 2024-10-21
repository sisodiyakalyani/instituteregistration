// models/Subject.js
const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  subject_name: { type: String, required: true }, // e.g., Math, Science
  standard: { type: mongoose.Schema.Types.ObjectId, ref: 'Standard', required: true }
});

module.exports = mongoose.model('Subject', SubjectSchema);
