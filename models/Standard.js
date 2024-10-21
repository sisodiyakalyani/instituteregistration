// models/Standard.js
const mongoose = require('mongoose');

const StandardSchema = new mongoose.Schema({
  standard_name: { type: String, required: true }, // e.g., LKG, HKG, 8th, 9th, etc.
  class_category: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassCategory', required: true }
});

module.exports = mongoose.model('Standard', StandardSchema);
