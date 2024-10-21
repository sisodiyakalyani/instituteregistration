const express = require('express');
const { getSubjectsByStandard, createSubject } = require('../controllers/subjectController');
const router = express.Router();

router.get('/:standardId', getSubjectsByStandard);
router.post('/', createSubject);

module.exports = router;
