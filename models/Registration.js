// models/Registration.js
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    institute_id: { type: String, required: true }, // Playhouse, School, College, Competitive Exam Center
    board_id: { type: String, default: null }, // Only required for Schools
    medium_id: { type: String, default: null }, // Only required for Schools
    class_category_id: { type: String, default: null }, // Only required for Schools
    standard_id: { type: String, default: null }, // Only required for Schools
    subject_ids: [{ type: String, default: null }], // Only required for Schools
    university: { type: String, default: null }, // Only required for Colleges
    degree_type: { type: String, default: null }, // Only required for Colleges
    exam_type: { type: String, default: null }, // Only required for Competitive Exam Centers
});

module.exports = mongoose.model('Registration', RegistrationSchema);
