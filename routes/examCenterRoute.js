// routes/examCenterRoutes.js
const express = require('express');
const router = express.Router();
const examCenterController = require('../controllers/examCenterController');

// Create competitive exam center registration
router.post('/register', examCenterController.createExamCenterRegistration);

module.exports = router;
