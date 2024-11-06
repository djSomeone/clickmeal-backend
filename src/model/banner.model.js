const mongoose = require('mongoose');

// Create a subcategory schema
const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensure that the subcategory name is required
        unique: true,   // Ensure that the subcategory name is unique within its category
    },
    image: {
        type: String,
        required: true, // Ensure that the subcategory image is required
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to the Category model
        required: true, // Ensure that categoryId is required
    },
    createdAt: {
        type: Date,
        default: Date.now, // Default to the current date
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Default to the current date
    },
});

// Create the Subcategory model
const Banner = mongoose.model('Banner', subcategorySchema);

module.exports = Subcategory;
