import React from 'react'

function SearchList({searchList}){
    console.log(searchList.length)
    
    if(searchList.length !==0){
        return (
            <ul>
            {searchList.results.map((movieSuggestion) => (<li key = {movieSuggestion.id}>{movieSuggestion.title}</li>))}
            </ul>
        )
    }

}
export default SearchList