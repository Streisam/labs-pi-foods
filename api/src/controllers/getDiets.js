const { Diet } = require("../db");

const getDiets = async () => {
    const dbDiets = await Diet.findAll();

    if (dbDiets.length) {
        console.log("from database");
        return dbDiets;
    }

    const dietList = [
        "gluten free",
        "vegan",
        "ketogenic",
        "lacto ovo vegetarian",
        "pescatarian",
        "paleolithic",
        "primal",
        "fodmap friendly",
        "whole 30",
        "dairy free",
    ];

    dietList.forEach(d => {
        Diet.findOrCreate({
            where: { name: d },
        });
    });

    return dietList;
}

module.exports = getDiets;