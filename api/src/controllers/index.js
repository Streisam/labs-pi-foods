const { getAllRecipes } = require("./getRecipes.js");
const getRecipesByName = require("./getRecipesByName.js");
const getRecipeById = require("./getRecipeById.js");

module.exports = controllers = {
    getAllRecipes,
    getRecipesByName,
    getRecipeById
}