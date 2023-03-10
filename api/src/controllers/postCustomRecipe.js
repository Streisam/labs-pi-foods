const { Recipe, Diet } = require("../db.js");

const postCustomRecipe = async (formData) => {

    const {
        name,
        summary,
        healthScore,
        steps,
        diets,
        image
    } = formData;

    if(!name || !summary ) {
        throw {
            status: false,
            message: 'Missing required information.'
        }
    }

    const recipeConfirm = await Recipe.findOne({
        where: { name }
    })
    if(recipeConfirm) {
        throw {
            status: false,
            message: 'The recipe already exists! Choose another name.'
        }
    }

    const newRecipe = await Recipe.create({
        name,
        summary,
        healthScore,
        steps,
        image
    });

    const dietsDb = await Diet.findAll({
        where: {
            name: diets
        }
    })

    newRecipe.addDiet(dietsDb);
    return {
        status: 'done',
        message: "New recipe added successfully!",
        recipe: newRecipe
    }
}

module.exports = postCustomRecipe;