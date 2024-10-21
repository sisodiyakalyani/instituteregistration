// controllers/collegeController.js
const Registration = require('../models/Registration');

// Create college registration
exports.createCollegeRegistration = async (req, res) => {
    const { university, degree_type } = req.body;

    try {
        const newRegistration = new Registration({
            institute_id: 'College',
            university,
            degree_type,
            board_id: null, // Not applicable
            medium_id: null, // Not applicable
            class_category_id: null, // Not applicable
            standard_id: null, // Not applicable
            subject_ids: [] // Not applicable
        });

        await newRegistration.save();
        res.status(201).json(newRegistration);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create college registration', details: err.message });
    }
};
