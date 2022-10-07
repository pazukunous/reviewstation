import React from 'react'
import SearchListItem from './SearchListItem'

function SearchList({searchList, setCurrMovie}){
    //console.log(searchList.length)
    
    const myStyle={
        listStyleType: 'none'
    }

    if(searchList.length !==0){
        return (
            <div id="searchlist">
                <ul style={myStyle}>
                {searchList.results.map((movieSuggestion) => (
                <SearchListItem key="SLI" movieSuggestion={movieSuggestion} setCurrMovie={setCurrMovie} 
                />
                ))}
                </ul>
            </div>
        )
    }

}
export default SearchList