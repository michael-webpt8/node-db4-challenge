exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { ingredient: 'bread', quantity: 2 },
    { ingredient: 'butter', quantity: 1, size: 'tbp' },
    { ingredient: 'milk', quantity: 1, size: 'pint' },
    { ingredient: 'cereal', quantity: 1, size: 'bowl' },
  ]);
};
