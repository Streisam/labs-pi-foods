import React from "react";

export default function Paginate({
    recipesPerPage,
    allRecipes,
    paginate}) {
    const pageNumber = [];
    for( let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul>
                {pageNumber &&
                pageNumber.map(n => (
                    <li key={n}>
                        <a onClick={() => paginate(n)}>{n}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}