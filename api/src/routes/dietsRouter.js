const controllers = require("../controllers");
const express = require("express");

const dietsRouter = express.Router();

dietsRouter.get('/', async (req, res) => {
    try {
        res.status(200).json(await controllers.getDiets());
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = dietsRouter;