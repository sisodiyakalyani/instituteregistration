// models/Board.js
const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true } // e.g., GSAB, CBSE
});

module.exports = mongoose.model('Board', BoardSchema);
