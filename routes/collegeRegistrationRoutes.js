// routes/collegeRoutes.js
const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeRegistrationController")

// Create college registration
router.post('/register', collegeController.createCollegeRegistration);

module.exports = router;
