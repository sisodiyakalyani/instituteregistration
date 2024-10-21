// models/Degree.js
const mongoose = require('mongoose');

const DegreeSchema = new mongoose.Schema({
  degree_type: { type: String, required: true, unique: true } // e.g., Bachelor’s, Master’s
});

module.exports = mongoose.model('Degree', DegreeSchema);
