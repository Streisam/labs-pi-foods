import { getRecipes } from "../../redux/actions";
import React from "react";
import { useDispatch } from "react-redux";

export default function Filters({ setOrder, setCurrentPage, setResetFilter, resetFilter }) {
    const dispatch = useDispatch();

    function handleClearFilter(e) {
        e.preventDefault();
        dispatch(getRecipes())
        setResetFilter("");
    }

    return (
        <>
            <div>
                <select 
                 
                >
                    <option key="Filter by Order">Filter by Order</option>
                    <option key="up" value="up">A-Z</option>
                    <option key="down" value="down">Z-A</option>
                </select>
                <select 
                
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
                <select 
                >
                    <option>Order by Health Score</option>
                    <option key="Asc" value="Asc">
                        Asc Health Score
                    </option>
                    <option key="Dsc" value="Dsc">
                        Health Score Desc
                    </option>
                </select>
            </div>
            <div>
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
