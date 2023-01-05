require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Op } = require("sequelize");
const getRecipes = require('./index');
const { Recipe, Diet } = require("../db.js");
const { getAllRecipes } = require("./getRecipes")

const getRecipesByName = async (name) => {
    
    const apiRecipes = await getAllRecipes();
    const apiReByName = apiRecipes.filter(r => r.name?.toLowerCase().includes(name.toLowerCase()))

    if(!apiReByName.length) {
        throw {
            status: false,
            message: 'Not Found!',
        }
    }

    return apiReByName;
}

module.exports = getRecipesByName;