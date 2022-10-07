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
    return starCount;
}

function HomeReview({movieList}){

    function reRoll()
    {
        console.log("rerolled")
        const newInt = Math.floor(Math.random() * movieList.length)
        return newInt;
    }

    if (movieList.length){
        let randMovie = Math.floor(Math.random() * movieList.length)
        // let randMovie = movieList[(movieList.length - 1)]
        // console.log(randMovie)
        // console.log(movieList[randMovie]?.reviews)
        //console.log(movieList[randMovie]["reviews"])
        while (movieList[randMovie]?.reviews === undefined)
        {
            reRoll()
        }
        const randReview = Math.floor(Math.random() * (movieList[randMovie].reviews.length))
        console.log(movieList[randMovie].reviews)
        if(movieList[randMovie].reviews.length === 0){
            reRoll()
        }
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