import React from "react";
import { NavLink } from "react-router-dom";


function SearchListItem({movieSuggestion, setCurrMovie}){

    function handleClick(){
        setCurrMovie(movieSuggestion)
    }

    return (
        <NavLink
        to={`/review/${movieSuggestion.id}`}
        exact
        >
    <li onClick={handleClick}>{movieSuggestion.title}</li>
    </NavLink>
    )
    
}


export default SearchListItem;