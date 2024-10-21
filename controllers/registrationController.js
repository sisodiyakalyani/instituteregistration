// controllers/registrationController.js
const Registration = require('../models/Registration');

// Create registration
exports.createRegistration = async (req, res) => {
    const {
        institute_id,
        board_id,
        medium_id,
        class_category_id,
        standard_id,
        subject_ids,
        university,
        degree_type,
        exam_type
    } = req.body;

    try {
        const newRegistration = new Registration({
            institute_id,
            board_id: institute_id === 'School' ? board_id : null,
            medium_id: institute_id === 'School' ? medium_id : null,
            class_category_id: institute_id === 'School' ? class_category_id : null,
            standard_id: institute_id === 'School' ? standard_id : null,
            subject_ids: institute_id === 'School' ? subject_ids : null,
            university: institute_id === 'College' ? university : null,
            degree_type: institute_id === 'College' ? degree_type : null,
            exam_type: institute_id === 'Competitive Exam Center' ? exam_type : null,
        });

        await newRegistration.save();
        res.status(201).json(newRegistration);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create registration', details: err.message });
    }
};
