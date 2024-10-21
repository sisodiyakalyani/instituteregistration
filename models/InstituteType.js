const mongoose = require('mongoose');

const InstituteTypeSchema = new mongoose.Schema({
  type_name: { type: String, required: true, unique: true } // e.g., Playhouse, School, College, Competitive Exam Center
});

module.exports = mongoose.model('InstituteType', InstituteTypeSchema);
