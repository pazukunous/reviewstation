import React from "react";
import styles from './HomeReview.css'

function genStars(stars){
    let starCount = "";
    for (let i=0; i<stars; i++){
        starCount += "★";
    }
    console.log(starCount)
    return starCount;
}

function HomeReview({movieList}){



    if (movieList.length){
        return(
        <div className="homeReview">
                <div className="homeReviewPoster">
                    <img src={movieList[0].img} width="140" height="210"/>
                </div>
                <div className="homeReviewContent">
                    <h2>{movieList[0].title}</h2>
                    <p className="filmReview">{movieList[0].reviews[0].review}</p>
                    <p>-{movieList[0].reviews[0].name}</p>
                    <p>{genStars(movieList[0].reviews[0].stars)}</p>
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