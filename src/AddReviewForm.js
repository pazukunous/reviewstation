import React, {useState} from "react";

function AddReviewForm(){

    //set state for new review entry
    const [review, setReview] = useState({})

    // function to post new movie review to database
    function addMovieReview(){
           fetch("http://localhost:3001/movies", {
            method: 'POST',
            headers: {
                Accept: 'application/form-data', "Content-Type": 'application/json',
            },
            body: JSON.stringify({review})
           }) 
           .then (response => response.json())
           .then (json => setReview(json))

    }

    return (
        <div>
            <h1>Write a new review for {'movie'}</h1>
            <form onSubmit={addMovieReview}>
                <label>
                    Your name
                    <input 
                    type="text"
                    value= {review.name} 
                    onChange={e => setReview({...review, name: e.target.value})}/> 

                </label>
                <label>
                    Your movie review
                    <input 
                    type ="text" 
                    value= {review.review}
                    onChange={e => setReview({...review, review: e.target.value})}/>
                </label>
                <label>
                    Your stars
                    <input type="range" 
                    id="stars" 
                    name="stars" 
                    min="0" 
                    max="5"
                    value = {review.stars}
                    onChange={e => setReview({...review, stars: e.target.value})}/> 
                </label>
            </form>
        </div>
    )
}

export default AddReviewForm