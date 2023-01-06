import axios from 'axios';
export const GET_RECIPES = "GET_RECIPES";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";
export const ORDER_BY_SCORE = "ORDER_BY_SCORE";


export function getRecipes() {
    return async (dispatch) => {
        try {
            const recipes = await axios.get("http://localhost:3001/recipes");
            dispatch({
                type: GET_RECIPES,
                payload: recipes.data
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