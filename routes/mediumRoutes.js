const express = require('express');
const { getAllMediums, createMedium } = require('../controllers/mediumController');
const router = express.Router();

router.get('/', getAllMediums);
router.post('/', createMedium);

module.exports = router;
