import { getRecipes, filterByDiet, orderByAlphabet, orderByScore  } from "../../redux/actions";
import React from "react";
import { useDispatch } from "react-redux";
import "./Filters.css";

export default function Filters({ setOrder, setCurrentPage, setResetFilter, resetFilter }) {
    const dispatch = useDispatch();

    function handleFilterByDiet(e) {
        e.preventDefault();
        dispatch(filterByDiet(e.target.value));
        setCurrentPage(1);
        setOrder(`${e.target.value}`);
    }

    function handleOrderByAlphabet(e) {
        e.preventDefault();
        dispatch(orderByAlphabet(e.target.value));
        setCurrentPage(1);
        setOrder(`${e.target.value}`);
    }

    function handleOrderByScore(e) {
        e.preventDefault();
        dispatch(orderByScore(e.target.value));
        setCurrentPage(1);
        setOrder(`${e.target.value}`);
    }

    function handleClearFilter(e) {
        e.preventDefault();

        dispatch(getRecipes())
        setCurrentPage(1);
        setResetFilter("");
    }


    return (
        <>
            <div className="container-filters">
                <div className="filter">
                    <select
                        defaultValue={resetFilter}
                        onChange={e => handleOrderByAlphabet(e)}
                    >   
                        <option hidden={true} key="Filter by Order">Filter by Order</option>
                        <option key="up" value="up">A-Z</option>
                        <option key="down" value="down">Z-A</option>
                    </select>
                </div>
                <div className="filter">
                    <select 
                        defaultValue={resetFilter}
                        onChange={e => handleFilterByDiet(e)}
                    >
                        <option hidden={true}>Filter by Type</option>
                        <option key="gluten free" value="gluten free">
                            gluten free
                        </option>
                        <option key="pescatarian" value="pescatarian">
                            pescatarian
                        </option>
                        <option key="whole 30" value="whole 30">
                            whole 30
                        </option>
                        <option key="dairy free" value="dairy free">
                            dairy free
                        </option>
                        <option key="primal" value="primal">
                            primal
                        </option>
                        <option key="lacto ovo vegetarian" value="lacto ovo vegetarian">
                            lacto ovo vegetarian
                        </option>
                        <option key="fodmap friendly" value="fodmap friendly">
                            fodmap friendly
                        </option>
                        <option key="vegan" value="vegan">
                            vegan
                        </option>
                        <option key="ketogenic" value="ketogenic">
                            ketogenic
                        </option>
                        <option key="paleolithic" value="paleolithic">
                            paleolithic
                        </option>
                    </select>
                </div>
                <div className="filter">
                    <select
                        
                        defaultValue={resetFilter}
                        onChange={e => handleOrderByScore(e)}     
                    >
                        <option hidden={true} >Order by Health Score</option>
                        <option key="Asc" value="Asc">
                            Asc Health Score
                        </option>
                        <option key="Dsc" value="Dsc">
                            Desc Health Score
                        </option>
                    </select>
                </div>
            </div>
            <div className="clearFil">
                <button
                key="clean"
                value="clean"
                onClick={event => handleClearFilter(event)}
                >
                    See All / Clear Filters
                </button>
            </div>
        </>
    )
}
