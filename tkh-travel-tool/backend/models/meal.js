const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  strMeal: { type: String },
  strMealThumb: { type: String },
  idMeal: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('Meal', mealSchema);
