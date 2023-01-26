import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";
import "./SearchBar.css";

export default function SearchBar({setCurrentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInput(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getRecipesByName(name));
        setCurrentPage(1);
        setName("");
    }

    return (
        <>
            <div className="searchBar">
                <input 
                type="text"
                placeholder="Search recipe by name..."
                value={name}
                onChange={e => handleInput(e)}/>
                <button 
                type="submit"
                onClick={e => handleSubmit(e)}>
                    Search
                </button>
            </div>
        </>
    )
}