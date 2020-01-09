exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe_instructions').truncate();
  await knex('recipes_ingredients').truncate();
  await knex('ingredients').truncate();
  await knex('recipes').truncate();
};
