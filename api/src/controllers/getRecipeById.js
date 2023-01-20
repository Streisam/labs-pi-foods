require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");

const getRecipeById = async (id) => {

    if(!isNaN(id)) {

        let recipeApiById = {};
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        recipeApiById = {
            id: data.id,
            name: data.title,
            image: data.image,
            summary: data.summary,
            healthScore: data.healthScore,
            dishTypes:data.dishTypes,
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
            model: Diet,
            through: { attributes: [] },
        }
    })

    if(recipeDbById) {    
        const recipeDbIdFinal = {
                id: recipeDbById.id,
                name: recipeDbById.name,
                summary: recipeDbById.summary,
                healthScore: recipeDbById.healthScore,
                image: recipeDbById.image,
                steps:recipeDbById.steps,
                diets: recipeDbById.diets?.map(d => d.name)
            };
          
        return recipeDbIdFinal;
    }

}

module.exports = getRecipeById;