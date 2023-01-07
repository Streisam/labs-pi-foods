import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets } from "../../redux/actions";
import { Link } from "react-router-dom"
import RecipeCard from "../RecipeCard/RecipeCard";
import Filters from "../Filters/Filters";
import Paginate from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.recipes);

    const [order, setOrder] = useState("");
    const [resetFilter, setResetFilter] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiets());
    }, [dispatch]);

    return (
        <>
            <SearchBar
            setCurrentPage={setCurrentPage}/>
            <Filters
            setOrder={setOrder}
            setCurrentPage={setCurrentPage}
            resetFilter={resetFilter}
            setResetFilter={setResetFilter}
            />
            <Paginate
            allRecipes={allRecipes.length}
            recipesPerPage={recipesPerPage}
            paginate={paginate}/>
            {currentRecipes?.map(r => (
                <RecipeCard
                key={r.id}
                id={r.id}
                name={r.name}
                image={r.image}
                types={r.diets.length > 0 ? r.diets : r.dishTypes}/>
            ))

            }
        </>
    )
}