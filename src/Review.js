import React from "react";

function genStars(stars){
    let starCount = "";
    for (let i=0; i<stars; i++){
        starCount += "★";
    }
    console.log(starCount)
    return starCount;
}

function Review({review}){
    return(
        <div className="movieReview">
            <div className="starCount">
                <p>{genStars(review.stars)}</p>
            </div>
            <div className="reviewContent">
                <h3>{review.name}</h3>
                <p className="review">{review.review}</p>
            </div>
        </div>
    )
}

export default Review;