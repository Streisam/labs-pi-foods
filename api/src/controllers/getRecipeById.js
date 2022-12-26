require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");

const url = 'https://api.spoonacular.com/recipes/{id}/information'

const getRecipeById = async (id) => {

    if(!isNaN(id)) {

        let recipeApiById = {};
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        recipeApiById = {
            id: data.id,
            name: data.title,
            img: data.image,
            summary: data.summary,
            healthScore: data.healthScore,
            diets: data.diets,
            steps: data.analyzedInstructions[0]?.steps?.map(s =>
                s.step
            ),
        }
        return recipeApiById;
    }

    const recipeDbById = await Recipe.findOne({
        where: {
            id: id,
        },
        include: {
            model: Diet
        }
    });

    return recipeDbById;

}

module.exports = getRecipeById;