// controllers/examCenterController.js
const Registration = require('../models/Registration');

// Create competitive exam center registration
exports.createExamCenterRegistration = async (req, res) => {
    const { exam_type } = req.body;

    try {
        const newRegistration = new Registration({
            institute_id: 'Competitive Exam Center',
            exam_type,
            university: null, // Not applicable
            degree_type: null, // Not applicable
            board_id: null, // Not applicable
            medium_id: null, // Not applicable
            class_category_id: null, // Not applicable
            standard_id: null, // Not applicable
            subject_ids: [] // Not applicable
        });

        await newRegistration.save();
        res.status(201).json(newRegistration);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create competitive exam center registration', details: err.message });
    }
};
