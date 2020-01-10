exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { ingredient: 'bread' },
    { ingredient: 'butter' },
    { ingredient: 'milk' },
    { ingredient: 'cereal' },
    { ingredient: 'cinnamon' },
    { ingredient: 'syrup' },
  ]);
};
