require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");

//Get recipes from API and DB

const getApiRecipes = async () => {

    const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=99`);
    const { results } = apiInfo.data;
    const apiRecipes = results?.map(r => {
        return {
            id: r.id,
            name: r.title,
            image: r.image,
            summary: r.summary,
            healthScore: r.healthScore,
            dishTypes: r.dishTypes,
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
    const dbData = await Recipe.findAll({
        include: {
            model: Diet,
            through: {
                attributes: [],
            },
        },
    });
    if(dbData) {
        const dbRecipes = await dbData?.map(r => {
            return {
                id: r.id,
                name: r.name,
                summary: r.summary,
                healthScore: r.healthScore,
                image: r.image,
                steps:r.steps,
                diets: r.diets?.map(d => d.name)
            };
        });
          console.log(dbRecipes.length)
          return dbRecipes;
    }
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
};