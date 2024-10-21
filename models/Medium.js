// models/Medium.js
const mongoose = require('mongoose');

const MediumSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true } // e.g., English, Hindi
});

module.exports = mongoose.model('Medium', MediumSchema);
