const express = require('express');

const dbRecipe = require('./recipes-model');

router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const recipes = await dbRecipe.getRecipes()
        if (recipes) {
            res.status(200).json(recipes);
        } else {
            res.status(400).json({ message: 'cannot find recipes' })
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
})

router.get('/:id/shoppingList', async (req, res, next) => {
    try {
        const id = req.params.id;
        if (id < 0) {
            res.status(400).json({ message: 'that recipe id does not exist' })
        } else {
            const shoppingList = await dbRecipe.getShoppingList(id);
            res.status(200).json(shoppingList);
        }


    } catch (err) {
        console.log(err);
        next(err);
    }
})



module.exports = router;
