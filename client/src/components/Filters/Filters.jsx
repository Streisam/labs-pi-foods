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
                        <option key="Filter by Order">Filter by Order</option>
                        <option key="up" value="up">A-Z</option>
                        <option key="down" value="down">Z-A</option>
                    </select>
                </div>
                <div className="filter">
                    <select 
                        defaultValue={resetFilter}
                        onChange={e => handleFilterByDiet(e)}
                    >
                        <option>Filter by Type</option>
                        <option key="gluten free" name="gluten free">
                            gluten free
                        </option>
                        <option key="pescatarian" name="pescatarian">
                            pescatarian
                        </option>
                        <option key="whole 30" name="whole 30">
                            whole 30
                        </option>
                        <option key="dairy free" name="dairy free">
                            dairy free
                        </option>
                        <option key="primal" name="primal">
                            primal
                        </option>
                        <option key="lacto ovo vegetarian" name="lacto ovo vegetarian">
                            lacto ovo vegetarian
                        </option>
                        <option key="fodmap friendly" name="fodmap friendly">
                            fodmap friendly
                        </option>
                        <option key="vegan" name="vegan">
                            vegan
                        </option>
                        <option key="ketogenic" name="ketogenic">
                            ketogenic
                        </option>
                        <option key="paleolithic" name="paleolithic">
                            paleolithic
                        </option>
                    </select>
                </div>
                <div className="filter">
                    <select
                        defaultValue={resetFilter}
                        onChange={e => handleOrderByScore(e)}     
                    >
                        <option>Order by Health Score</option>
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
