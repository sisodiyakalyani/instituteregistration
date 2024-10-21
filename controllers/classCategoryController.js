const ClassCategory = require("../models/ClassCategory");

// controllers/classCategoryController.js
exports.getAllClassCategories = async (req, res) => {
  try {
    const classCategories = await ClassCategory.find();
    res.status(200).json(classCategories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch class categories', details: err.message });
  }
};


// Create a new class category
exports.createClassCategory = async (req, res) => {
    try {
        // Extract category_name from the request body
        const { category_name } = req.body; 
        
        // Check if category_name is provided
        if (!category_name) {
            return res.status(400).json({ error: 'category_name is required' });
        }

        const newCategory = new ClassCategory({ category_name });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create class category', details: err.message });
    }
};
