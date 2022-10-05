import React from 'react'
import SearchListItem from './SearchListItem'

function SearchList({searchList, setCurrMovie}){
    //console.log(searchList.length)
    
    if(searchList.length !==0){
        return (
            <ul>
            {searchList.results.map((movieSuggestion) => (
            <SearchListItem movieSuggestion={movieSuggestion} setCurrMovie={setCurrMovie} 
            />
            ))}
            </ul>
        )
    }

}
export default SearchList