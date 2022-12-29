const { getAllRecipes } = require("./getRecipes.js");
const getRecipesByName = require("./getRecipesByName.js");
const getRecipeById = require("./getRecipeById.js");
const getDiets = require("./getDiets.js");

module.exports = controllers = {
    getAllRecipes,
    getRecipesByName,
    getRecipeById,
    getDiets
}