const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db('recipes').select('recipe_name');
}

function getShoppingList(recipe_id) {
  return db('recipes_ingredients as ri')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .join('recipes as r', 'ri.recipe_id', recipe_id)
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db('recipes as r')
    .join('recipe_instructions as ri', 'r.id', 'ri.recipe_id')
    .where({ recipe_id });
}
