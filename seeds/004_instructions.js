exports.seed = async function(knex) {
  await knex('recipe_instructions').insert([
    { instruction: 'place 2 slices of toast in toaster', recipe_id: 1 },
    { instruction: 'take 2 slices of toast out when toasted', recipe_id: 1 },
    {
      instruction: 'spread 1 teaspoon of butter on each slice of bread',
      recipe_id: 1,
    },
    { instruction: 'get one bowl and spoon', recipe_id: 2 },
    { instruction: 'pour 1 bowl of cereal into bowl', recipe_id: 2 },
    {
      instruction: 'pour 1 pint of milk into bowl mix with cinnamon',
      recipe_id: 2,
    },
    { instruction: 'serve cold', recipe_id: 2 },
    { instruction: 'pour 2 cups of milk into a saucer', recipe_id: 3 },
    {
      instruction:
        'turn skillet on medium and put a teaspoon of butter to sizzle',
      recipe_id: 3,
    },
    { instruction: 'take out 3 slices of bread put on counter', recipe_id: 3 },
    {
      instruction:
        'lightly soak bread in milk batter before putting in skillet',
      recipe_id: 3,
    },
    {
      instruction: 'let bread brown lightly then flip to other side',
      recipe_id: 3,
    },
    {
      instruction: 'put on plate to cool down once browned on each side',
      recipe_id: 3,
    },
    { instruction: 'repeat till all bread slices are complete', recipe_id: 3 },
    { instruction: 'pour syrup on as wanted.', recipe_id: 3 },
  ]);
};
