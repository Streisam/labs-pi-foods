import React from 'react';
import "./NavBar.css";

export default function NavBar() {

    return(
        <div>
            <ul>
                <li><a className="active" href="/">Landing</a></li>
                <li><a href="/home">Recipes</a></li>
                <li><a href="/diets">Diets</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="#about">About</a></li>
               
                </ul>
        </div>
    )
}