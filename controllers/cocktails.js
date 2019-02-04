const Cocktail = require('../models/cocktail')

function indexRoute(req, res) {
  Cocktail
    .find()
    .then(cocktails => res.status(200).json(cocktails))
    .catch(err => res.status(422).json(err))
}

function createRoute(req, res) {
  Cocktail
    .create(req.body)
    .then(cocktail => res.status(201).json(cocktail))
    .catch(err => res.status(422).json(err))
}

module.exports = {
  index: indexRoute,
  create: createRoute
}
