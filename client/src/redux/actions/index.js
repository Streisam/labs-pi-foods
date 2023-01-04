import axios from 'axios';
export const GET_RECIPES = "GET_RECIPES";

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