exports.up = async function(knex) {
  await knex.schema.createTable('recipes', table => {
    table.increments('id');
    table.string('recipe_name', 250).notNullable();
  });

  await knex.schema.createTable('ingredients', table => {
    table.increments('id');
    table.string('ingredient', 160).notNullable();
    table.float('quantity').notNullable();
  });

  await knex.schema.createTable('recipes_ingredients', table => {
    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
    table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');
    table.primary(['recipe_id', 'ingredient_id']);
  });

  await knex.schema.createTable('recipe_instructions', table => {
    table.increments('id');
    table.text('instruction').notNullable();
    table
      .integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe_instructions');
  await knex.schema.dropTableIfExists('recipes_ingredients');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('recipes');
};
