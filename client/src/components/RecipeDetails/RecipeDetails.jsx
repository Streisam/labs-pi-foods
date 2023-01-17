import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import "./RecipeDetails.css";
export default function RecipeDetails(props) {
    
    const dispatch = useDispatch();
    const recipeDetail = useSelector(state => state.recipeDetail);
    const { id } = useParams();

    useEffect(()=> {
        dispatch(getRecipeDetail(id));
    }, [dispatch, id])
    return (
        <>
            <NavBar/>
            <div className="container-recipeDet">
                {recipeDetail && (
                <div className="recipeDet" key={recipeDetail.id}>
                    <h1>{recipeDetail.name}</h1>
                    <div>
                        <img src={recipeDetail.image} alt="recipe finished" />
                    </div>
                    <h3>HealthScore: {recipeDetail.healthScore}</h3>
                    <h3>Diets:</h3>
                    <p>
                        {recipeDetail.diets ? recipeDetail.diets + ", " : recipeDetail.dishTypes}
                    </p>
                    <h3>Summary:</h3>
                    <p>{recipeDetail.summary?.replace(/<[^>]*>/g, '')}</p>
                    <h2>¿How to Prepare?</h2>
                    {recipeDetail.steps ? recipeDetail.steps.map(s => 
                    <p>{s}</p>) : <p>Steps not available.</p>}
                </div>
                )}

            </div>
        </>
    )
}