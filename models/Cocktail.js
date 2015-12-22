var mongoose = require('mongoose');

var CocktailSchema = new mongoose.Schema({
  Name: String,
  Ingredients: String,
  Alcohol: String,
  Neat: Boolean
});

module.exports = mongoose.model('Cocktail',CocktailSchema);
