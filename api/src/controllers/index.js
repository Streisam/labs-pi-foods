const { getAllRecipes } = require("./getRecipes.js");
const getRecipesByName = require("./getRecipesByName.js");
const getRecipeById = require("./getRecipeById.js");
const getDiets = require("./getDiets.js");
const postCustomRecipe = require("./postCustomRecipe.js");

module.exports = controllers = {
    getAllRecipes,
    getRecipesByName,
    getRecipeById,
    getDiets,
    postCustomRecipe
}