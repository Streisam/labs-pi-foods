import React from "react";
import "./Paginate.css";

export default function Paginate({
    recipesPerPage,
    allRecipes,
    paginate,
    currentPage,
    setCurrentPage}) {
    const pageNumber = [];
    for( let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumber.push(i);
    }

    function handleNext() {
        if (currentPage < Math.ceil(allRecipes / recipesPerPage)) {
          if (currentPage > 0) {
            setCurrentPage(currentPage + 1);
          }
        }
        if (currentPage === Math.ceil(allRecipes / recipesPerPage)){
          setCurrentPage(1)
        }
      }
    
      function handlePrev() {
        if (currentPage > 1) {
          if (currentPage <= Math.ceil(allRecipes / recipesPerPage)) {
            setCurrentPage(currentPage - 1);
          }
        }
        if (currentPage === 1){
          setCurrentPage(Math.ceil(allRecipes / recipesPerPage))
        }
      }

    return (
        <nav className="paginate">
            <button onClick={() => handlePrev()}> {"<"} </button>
                {pageNumber &&
                pageNumber.map(n => (
                        <button onClick={() => paginate(n)} key={n}>{n}</button>
                ))}
            <button onClick={() => handleNext()}>{">"}</button>
        </nav>
    );
}