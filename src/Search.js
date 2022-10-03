import React, {useState, useEffect} from "react";
import SearchList from "./SearchList";

function Search(){

    // sets state of movie search
    const[searchTerm, setSearchTerm] = useState("")
    const[searchList, setSearchList] = useState([])


//function to only search once the user hasn't typed for a bit
    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //     // console.log(searchTerm)
    //     }, 500)
        
    //     return () => clearTimeout(delayDebounceFn)
    // }, [searchTerm])

// function to handle search and create suggestions for movie titles
    function handleSearch(event){
        event.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${event.target.value}`)
            .then(resource => resource.json())
            .then(movieSuggestions => (setSearchList(movieSuggestions)))
    
    
    setSearchTerm(event.target.value)
    }

// // function to list movie suggestions
//     function listMovieSuggestions(){
//         
//     }

    
    return(
        <div className="searchBar">
            <input
            type="text"
            placeholder="Search for a film.."
            value = {searchTerm}
            onChange = {handleSearch}
            />
            <SearchList searchList = {searchList} />
        </div>

    )
}

export default Search;