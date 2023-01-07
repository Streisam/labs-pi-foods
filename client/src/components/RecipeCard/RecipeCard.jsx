import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard( props ) {
    return (
    <>
        <div>
            <Link to={`/recipes/${props.id}`}></Link>
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <h5>Type of Diet:</h5>
            <ul>
                {props.types?.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
        </div>
    </>
    );
}