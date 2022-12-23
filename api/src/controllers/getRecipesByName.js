require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Op } = require("sequelize");
const getRecipes = require('./index');
const { Recipe, Diet } = require("../db.js");
const { getApiRecipes } = require("./getRecipes")

const getRecipesByName = async (name) => {
    
    const apiRecipes = await getApiRecipes();
    const apiReByName = apiRecipes.filter(r => r.name?.toLowerCase().includes(name.toString().toLowerCase()))
    const dbReByName = await Recipe.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}`,
            },
        },
        include: Diet
    });

    if(!apiReByName.length && !dbReByName.length) {
        throw {
            status: false,
            message: 'Not Found!',
        }
    }

    return [...apiReByName, ...dbReByName];
}

module.exports = getRecipesByName;