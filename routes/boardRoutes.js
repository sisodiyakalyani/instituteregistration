const express = require('express');
const { getAllBoards, createBoard } = require('../controllers/boardController');
const router = express.Router();

router.get('/', getAllBoards);
router.post('/', createBoard);

module.exports = router;
