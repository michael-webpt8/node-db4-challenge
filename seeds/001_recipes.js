exports.seed = async function(knex) {
  await knex('recipes').insert([
    { recipe_name: 'toast' },
    { recipe_name: 'cereal' },
    { recipe_name: 'french toast' },
  ]);
};
