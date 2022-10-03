import React from "react";

function Search(){
    return(
        <div className="searchBar">
            <form>
            <input
            type="text"
            placeholder="Search for a film.."
            />
            <input
            type="submit"
            value="Submit"
            />
            </form>
        </div>
    )
}

export default Search;