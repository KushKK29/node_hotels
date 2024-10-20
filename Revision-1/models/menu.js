const mongoose = require("mongoose");

// Creating the schema
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    required: true,
  },
  is_drink: {
    type: Boolean,
    required: true,
  },
  ingredients: {
    type: [String], // Array of strings for multiple ingredients
    enum: ["chicken wings", "spices", "sauce"], // Corrected typo
    required: true,
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

// Creating the model
const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
