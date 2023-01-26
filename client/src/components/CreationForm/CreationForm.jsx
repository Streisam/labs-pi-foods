import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDiets, postRecipe } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import "./CreationForm.css";

const validate = (post) => {
    let errors = {}
    if (!post.name) {
        errors.name = 'You need to put a name to the recipe!'
    } else if (/[^a-zA-Z, ]/g.test(post.name)) {
        errors.name = 'Please only use letters for the recipe name'
    } else if (post.name.length > 50) {
        errors.name = 'Your name recipe have a lot of letters'
    }
    
    if(!post.summary) {
        errors.summary = 'You must make a summary for your recipe!'
    }
    
    if(isNaN(Number(post.healthScore))) {
        errors.healthScore = 'Enter a health score number to the recipe! (optional)'
    } else if(post.healthScore < 0 || post.healthScore > 100) {
        errors.healthScore = 'Health score must be between 0-100'
    }

    if(post.image.length > 250) {
        errors.image = 'You image url its too large!!'
    }

    if (!post.steps.length) {
        errors.steps = 'You must add steps to your recipe.'
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
    const [errors, setErrors] = useState({})
    const [post, setPost] = useState({
        name: "",
        summary: "",
        healthScore: 0,
        steps: [],
        image: "",
        diets: []
    })

    useEffect(() => {
        dispatch(getDiets());
    }, [])

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
        post.steps = post.steps.split('\n');
        console.log(post.steps);
        dispatch(postRecipe(post));
        console.log(post);
        setPost({
            name: "",
            summary: "",
            healthScore: 0,
            steps: [],
            image: "",
            diets: []
        })
        history.push("/home");
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
            <div className="creation-form">
                <form onSubmit={e => {
                    handleSubmit(e)
                }}>
                    <h1>Create your own recipe</h1>
                    <div>
                        <label>Recipe name: </label>
                        <input
                        key="name" 
                        type="text"
                        value={post.name}
                        name="name"
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Summary: </label>
                        <textarea
                        key="summary"  
                        rows="5"
                        cols="50"
                        value={post.summary}
                        name="summary"
                        maxLength="800"
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Health Score: </label>
                        <input
                        key="healthScore"  
                        type="number"
                        value={post.healthScore}
                        name="healthScore"
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Recipe image url: </label>
                        <input
                        key="image" 
                        type="text"
                        name="image"
                        value={post.image}
                        onChange={handleChange}
                        placeholder="Image Url for your recipe"/>
                    </div>
                    <div>
                        <label>Steps (Please separate every step with the enter input) : </label>
                        <textarea
                        key="steps" 
                        id="steps" 
                        rows="6"
                        cols="50"
                        value={post.steps}
                        name="steps"
                        maxLength="1000"
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
                    <input className="disabled" type="submit" value="Submit" disabled></input> 
                ) : errors.name ||
                errors.diets ||
                errors.summary || errors.steps ? (<input className="disabled" type="submit" value="Submit"  disabled></input>
                ) : (<input className="enabled" type="submit" value="Submit"></input>) }
                { errors.name && (<p className="error">{errors.name}</p>)}
                { errors.summary && (<p className="error">{errors.summary}</p>)}
                { errors.healthScore && (<p className="error">{errors.healthScore}</p>)}
                { errors.image && (<p className="error">{errors.image}</p>)}
                { errors.steps && (<p className="error">{errors.steps}</p>)}
                { errors.diets && (<p className="error">{errors.diets}</p>)}
                </form>
            </div>
        </>
    )
}
