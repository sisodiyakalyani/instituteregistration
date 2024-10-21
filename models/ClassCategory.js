// models/ClassCategory.js
const mongoose = require('mongoose');

const classCategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,  // Ensure this field is required
        trim: true,
    },
}, { timestamps: true });

const ClassCategory = mongoose.model('ClassCategory', classCategorySchema);
module.exports = ClassCategory;
