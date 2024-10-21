const express = require('express');
const { getAllClassCategories, createClassCategory } = require('../controllers/classCategoryController');
const router = express.Router();

router.get('/', getAllClassCategories);
router.post('/', createClassCategory);

module.exports = router;
