const express = require('express');
const { getAllInstituteTypes, createInstituteType } = require('../controllers/instituteTypeController');
const router = express.Router();

router.get('/', getAllInstituteTypes);
router.post('/', createInstituteType);

module.exports = router;
