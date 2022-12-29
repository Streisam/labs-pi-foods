const controllers = require("../controllers");
const express = require("express");
const { Recipe, Diet } = require("../db.js");

const recipesRouter = express.Router();

recipesRouter.get('/', async (req, res) => {
    const { name } = req.query;
    if (name) {
        try {
            const recipesFilterByName = await controllers.getRecipesByName(name);
            res.status(200).json(recipesFilterByName)
        } catch (error) {
            res.status(404).send(error); 
        }

    } else {
        try {
            const allRecipes = await controllers.getAllRecipes();
            res.status(200).json(allRecipes);
        } catch (error) {
            res.status(500).send(error);
        }
    }
});

recipesRouter.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await controllers.getRecipeById(id));
    } catch (error) {
        res.status(500).send(error);
    }
})

recipesRouter.post('/', async (req, res) => {
    const recipeCreationForm = req.body;
    try {
        res.status(201).send(await controllers.postCustomRecipe(recipeCreationForm));
    } catch (error) {
        console.log(error)
        res.status(404).send(error);
    }
})

module.exports = recipesRouter;