// models/University.js
const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true } // e.g., Harvard, Stanford
});

module.exports = mongoose.model('University', UniversitySchema);
