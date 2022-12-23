require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe } = require("../db.js");

//Get recipes from API and DB

const getApiRecipes = async () => {

    const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=99`);
    const { results } = apiInfo.data;
    const apiRecipes = results?.map(r => {
        return {
            id: r.id,
            name: r.title,
            img: r.image,
            summary: r.summary,
            healthScore: r.healthScore,
            diets:r.diets,
            steps: r.analyzedInstructions[0]?.steps?.map(s => 
                s.step
            ),
            }
        }
        );

        console.log(apiRecipes.length);

        return apiRecipes;
}

const getDbRecipes = async () => {
    const dbRecipes = await Recipe.findAll();
      console.log(dbRecipes.length)
      return dbRecipes;
}

const getAllRecipes = async () => {
    const apiRecipes = await getApiRecipes();
    const dbRecipes = await getDbRecipes();
    const allRecipes = apiRecipes.concat(dbRecipes);
    console.log(allRecipes.length)
    return allRecipes;
}

module.exports = {
    getApiRecipes, 
    getAllRecipes
}