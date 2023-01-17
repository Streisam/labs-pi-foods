import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDiets, getRecipes, postRecipe } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";

const validate = (post) => {
    let errors = {}
    if (!post.name) {
        errors.name = 'You need to put a name to the recipe!'
    } else if (/[^a-zA-Z, ]/g.test(post.name)) {
        errors.name = 'Please only use letters for the recipe name'
    }
    
    if(!post.summary) {
        errors.summary = 'You must make a summary for your recipe!'
    }
    
    if(isNaN(Number(post.healthScore))) {
        errors.healthScore = 'Enter a health score to the recipe!'
    } else if(post.healthScore < 0 || post.healthScore > 100) {
        errors.healthScore = 'Health score must be between 0-100'
    }
    
    if(!post.diets.length) {
        errors.diets = 'You must add a diet to your recipe'
    }
    
      return errors
}

export default function CreationForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector(state => state.diets);
    // const recipes = useSelector(state => state.recipes);
    const [errors, setErrors] = useState({})
    const [post, setPost] = useState({
        name: "",
        summary: "",
        healthScore: 0,
        steps: "",
        image: "",
        diets: []
    })

    useEffect(() => {
        dispatch(getDiets());
    }, [])

    // useEffect(() => {
    //     dispatch(getRecipes());
    // }, [])

    function handleChange(e) {
        e.preventDefault();
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...post,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postRecipe(post));
        setPost({
            name: "",
            summary: "",
            healthScore: 0,
            steps: "",
            image: "",
            diets: []
        })
        console.log(post);
        history.push("/create");
    }

    function handleDiet(e) {
        if(e.target.checked){
          setPost({
            ...post,
            diets: [...post.diets, e.target.value]
          })
          setErrors(validate({
            ...post,
            diets: [...post.diets, e.target.value]
          }))
        }
          if(e.target.checked === false){
            setPost({
              ...post,
              diets: [...post.diets.filter(d => d !== e.target.value)]
            })
            setErrors(validate({
              ...post,
              diets: [...post.diets.filter(d => d !== e.target.value)]
            }))
        }
  
      }

    return (
        <>
            <NavBar/>
            <div>
                <form onSubmit={e => {
                    handleSubmit(e)
                }}>
                    <h1>Create your own recipe</h1>
                    <div>
                        <label>Recipe name: </label>
                        <input 
                        type="text"
                        value={post.name}
                        name="name"
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Summary: </label>
                        <input 
                        type="text"
                        value={post.summary}
                        name="summary"
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Health Score: </label>
                        <input 
                        type="number"
                        value={post.healthScore}
                        name="healthScore"
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Recipe image url: </label>
                        <input
                        type="text"
                        name="image"
                        value={post.image}
                        onChange={handleChange}
                        placeholder="Image Url for your recipe"/>
                    </div>
                    <div>
                        <label>Steps: </label>
                        <input 
                        type="text"
                        value={post.steps}
                        name="steps"
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Diet/s:</label>
                        {
                            diets.map(d => {
                                return (
                                    <div>
                                        <label key={d.id}>
                                            {d.name}
                                        </label>
                                        <input 
                                        type="checkbox" 
                                        value={d.name} 
                                        onChange={e => handleDiet(e)}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                {!post.name ? (
                    <input type="submit" disabled></input> 
                ) : errors.name ||
                errors.diets ||
                errors.summary ? (<input type="submit" disabled></input>
                ) : (<input type="submit"></input>) }
                { errors.name && (<p color="red">{errors.name}</p>)}
                { errors.summary && (<p color="red">{errors.summary}</p>)}
                { errors.diets && (<p color="red">{errors.diets}</p>)}
                </form>
            </div>
        </>
    )
}
