import React from 'react'
import SearchListItem from './SearchListItem'

function SearchList({searchList, setCurrMovie}){
    //console.log(searchList.length)
    
    if(searchList.length !==0){
        return (
            <div id="searchlist">
                <ul>
                {searchList.results.map((movieSuggestion) => (
                <SearchListItem movieSuggestion={movieSuggestion} setCurrMovie={setCurrMovie} 
                />
                ))}
                </ul>
            </div>
        )
    }

}
export default SearchList