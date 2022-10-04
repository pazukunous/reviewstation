import React from "react";
import { NavLink } from "react-router-dom";


function SearchListItem({movieSuggestion}){


    return (
        <NavLink
        to={`/review/${movieSuggestion.id}`}
        exact
        >
    <li>{movieSuggestion.title}</li>
    </NavLink>
    )
}


export default SearchListItem;