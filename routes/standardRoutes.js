const express = require('express');
const { getStandardsByClassCategory, createStandard } = require('../controllers/standardController');
const router = express.Router();

router.get('/:classCategoryId', getStandardsByClassCategory);
router.post('/', createStandard);

module.exports = router;
