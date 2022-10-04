import React, {useState, useEffect} from "react";
import SearchList from "./SearchList";
import AddReviewForm from "./AddReviewForm";

function Search(){

    // sets state of movie search
    const[searchTerm, setSearchTerm] = useState("")
    const[searchList, setSearchList] = useState([])


    // function to handle search and create suggestions for movie titles
    function handleSearch(event){
        event.preventDefault()
        setSearchTerm(event.target.value)
        if(event.target.value==='') {
            setSearchList([])
            return console.log('search field empty')}
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${event.target.value}`)
            .then(resource => resource.json())
            .then(movieSuggestions => (setSearchList(movieSuggestions)))
            console.log(searchList)
    }

  
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