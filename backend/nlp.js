const natural = require('natural')

const baseTokenizer = new natural.WordTokenizer()

function tokenizeRecipe (recipe) {
 return baseTokenizer.tokenize(recipe)
}

function regexpTokenizeRecipe (recipe, pattern) {
  const regexpTokenizer = new natural.RegexpTokenizer({pattern})

  return regexpTokenizer.tokenize(recipe)
}

module.exports = {
  tokenizeRecipe,
  regexpTokenizeRecipe
}