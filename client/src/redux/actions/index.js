import axios from 'axios';
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";


export function getRecipes() {
    return async (dispatch) => {
        try {
            const recipes = await axios.get("http://localhost:3001/recipes");
            return dispatch({
                type: GET_ALL_RECIPES,
                payload: recipes.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDiets() {
    return async (dispatch) => {
        const diets = await axios.get("http://localhost:3001/diets");
        return dispatch({
            type: GET_DIETS,
            payload: diets.data
        })
    }
}

export function getRecipesByName(name) {
    return async (dispatch) => {
        try {
            const recipesByName = await axios.get(`http://localhost:3001/recipes?name=${name}`);
            return dispatch({
                type: GET_RECIPES_BY_NAME,
                payload: recipesByName.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getRecipeDetail(id) {
    return async (dispatch) => {
        try {
            const recipeDetail = await axios.get(`http://localhost:3001/recipes/${id}`);
            return dispatch({
                type: GET_RECIPE_DETAILS,
                payload: recipeDetail.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterByDiet(payload){
    return {
        type: FILTER_BY_DIET,
        payload
    }
}

export function orderByAlphabet(payload){
    return {
        type: ORDER_BY_ALPHABET,
        payload
    }
}

export function orderByScore(payload) {
    return {
        type: ORDER_BY_SCORE,
        payload
    }
}