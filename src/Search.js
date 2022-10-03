import React, {useState, useEffect} from "react";

function Search(){

    // sets state of movie search
    const[searchTerm, setSearchTerm] = useState("")



//function to only search once the user hasn't typed for a bit
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
        console.log(searchTerm)
        }, 3000)
        
        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])
// function to handle search and create suggestions for movie titles
    function handleSearch(event){
        event.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${searchTerm}`)
            .then(resource => resource.json())
            .then(movieSuggestions => (console.log(movieSuggestions)))
    
    console.log(event)
    setSearchTerm(event.target.value)

   
    }

    return(
        <div className="searchBar">
            <input
            type="text"
            placeholder="Search for a film.."
            value = {searchTerm}
            onChange = {handleSearch}
            />
           
           
        </div>
    )
}

export default Search;