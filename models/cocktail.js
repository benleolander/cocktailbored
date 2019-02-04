const mongoose = require('mongoose')

const cocktailSchema = new mongoose.Schema({
  name: { type: String, required: true},
  image: { type: String, required: true},
  ingredients: { type: Array, required: true},
  origin: { type: String }
})

module.exports = mongoose.model('Cocktail', cocktailSchema)
