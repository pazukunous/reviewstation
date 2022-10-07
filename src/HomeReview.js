import React from "react";
import styles from './HomeReview.css'

function genStars(stars){
    let starCount = "";
    for (let i=0; i<stars; i++){
        starCount += "★";
    }
    while (starCount.length < 5)
    {
        starCount+="☆";
    }
    console.log(starCount)
    return starCount;
}

function HomeReview({movieList}){

    if (movieList.length){
        const randMovie = Math.floor(Math.random() * movieList.length)
        const randReview = Math.floor(Math.random() * (movieList[randMovie].reviews.length))
        console.log(movieList)
        console.log(randMovie)
        console.log(randReview)
        console.log(movieList[randMovie])
        return(
        <div className="homeReview">
                <div className="homeReviewPoster">
                    <img src={movieList[randMovie].img} width="140" height="210"/>
                </div>
                <div className="homeReviewContent">
                    <h2>{movieList[randMovie].title}</h2>
                    <p className="filmReview">{movieList[randMovie].reviews[randReview].review}</p>
                    <p>-{movieList[randMovie].reviews[randReview].name}</p>
                    <p>{genStars(movieList[randMovie].reviews[randReview].stars)}</p>
                </div>
        </div>
        )}

    else{
        return(
            <p>no moives</p>
        )
    }
}

export default HomeReview;