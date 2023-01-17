import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css"

export default function RecipeCard( props ) {
    return (
    <>
        <div className="card">
            <Link to={`/recipes/${props.id}`} style={{ textDecoration: 'none'}}>
                <div className="card-details">
                    <img className="card-image" src={props.image} alt={props.name} />
                    <h3 className="name">{props.name}</h3>
                    <div className="container-ths">
                        <div className="types">
                            <h5>Type of Diet:</h5>
                            <ul>
                            {props.types?.map(t => (
                                <li key={t}>{t}</li>
                            ))}
                            </ul>
                        </div>
                        <div className="hs">
                                <h4>HealthScore:</h4>
                                <h3>{props.healthScore}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </>
    );
}