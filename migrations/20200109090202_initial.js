exports.up = async function(knex) {
  await knex.schema.createTable('recipes', table => {});

  await knex.schema.createTable('ingredients', table => {});

  await knex.schema.createTable('recipes_ingreidents', table => {});

  await knex.schema.createTable('recipe_instructions', table => {});
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe_instructions');
  await knex.schema.dropTableIfExists('recipes_ingredients');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('recipes');
};
