// controllers/boardController.js
const Board = require('../models/Board');

// Get all boards
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch boards', details: err.message });
  }
};

// Add a new board
exports.createBoard = async (req, res) => {
  try {
    const newBoard = new Board({ name: req.body.name });
    await newBoard.save();
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create board', details: err.message });
  }
};
