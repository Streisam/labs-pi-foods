import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../../redux/actions";

export default function RecipeDetails(props) {
    
    const dispatch = useDispatch();
    const recipeDetail = useSelector(state => state.recipeDetail);
    const { id } = useParams();

    useEffect(()=> {
        dispatch(getRecipeDetail(id));
    }, [dispatch, id])
    return (
        <>
           <div>
            
            <div>
                <h1>{recipeDetail.name}</h1>
                <img src={recipeDetail.image} alt='image of the recipe' width='500px'
                height='700px'/>
                <h4>{recipeDetail.dishTypes}</h4>
                <h4>{recipeDetail.diets}</h4>
                <p>{recipeDetail.summary}</p>
                <h4>{recipeDetail.healthScore}</h4>
                <p>{recipeDetail.steps}</p>

            </div>: <div></div>
            
           </div>
        </>
    )
}