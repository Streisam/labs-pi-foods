import {
    GET_RECIPES,
    FILTER_BY_DIET,
    ORDER_BY_ALPHABET,
    ORDER_BY_SCORE
} from "../actions";

const initialState = {
    recipes: [],
    recipeDetail: {},
    recipesCopy: [],
    diets: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                recipesCopy: action.payload
            }
        case FILTER_BY_DIET:
            const allRecipesC = state.recipesCopy;
            const dietFilter = action.payload === '' ?
            allRecipesC :
            allRecipesC.filter(r => r.diets.includes(action.payload))
            return {
                ...state,
                recipes: dietFilter
            }
        case ORDER_BY_ALPHABET:
            const sortedAlphabet = action.payload === "up" ?
                state.recipes.sort((a,b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                }) :
                state.recipes.sort((a,b) => {
                    if(a.name > b.name) return -1;
                    if(a.name < a.name) return 1;
                    return 0;
                });
            return {
                ...state,
                recipes: sortedAlphabet
            }
        case ORDER_BY_SCORE:
            const sortedScore = action.payload === "Asc" ?
                state.recipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) return -1;
                    if (a.healthScore < b.healthScore) return 1;
                    return 0
                }) :
                state.recipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) return 1;
                    if (a.healthScore < b.healthScore) return -1;
                    return 0
                })
            return {
                ...state,
                payload: sortedScore
            }
        default:
            return state;
    }
}
