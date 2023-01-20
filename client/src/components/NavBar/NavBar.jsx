import React from 'react';
import "./NavBar.css";

export default function NavBar() {

    return(
        <div id="cssmenu">
            <ul>
                <li><a href="/">Landing</a></li>
                <li><a href="/home">Recipes</a></li>
                <li><a href="/create">Create</a></li>
            </ul>
        </div>
    )
}