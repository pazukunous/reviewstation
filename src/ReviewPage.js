import React from "react";

import Header from "./Header";
import Review from "./Review";
import {useParams} from "react-router-dom";

function ReviewPage({currMovie, movieData}){
    const params = useParams()
    console.log(movieData)
    console.log(currMovie)

    let reviews = []
    movieData.forEach(movie => {
        if(movie.id === currMovie.id){
            console.log("reviews found")
            movie.reviews.forEach(review => {
                reviews.push(review)
            });
        }
        else{
            console.log("no reviews found")
        }

    });

    console.log(reviews)

    return(
        <div>
            <Header/>
            <h2>{currMovie.title} <span> ({currMovie["release_date"].slice(0,4)})</span></h2>
            <img src={`https://image.tmdb.org/t/p/w500/${currMovie["poster_path"]}`} width="140" height="210"/>
            <ul>
                {reviews.map((review)=>{
                    return(
                    <Review id={review.id} review={review}/>
                )})}
            </ul>
        </div>
    )

    

}

export default ReviewPage;