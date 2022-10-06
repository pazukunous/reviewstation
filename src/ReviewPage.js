import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Review from "./Review";
import {useParams} from "react-router-dom";
import "./ReviewPage.css"

function ReviewPage({currMovie, movieData, setMovieData}){

    let reviews = []
    let movieFound = false;
    movieData.forEach(movie => {
        if(movie.id === currMovie.id){
            console.log("reviews found")
            movieFound = true;
            movie.reviews.forEach(review => {
                reviews.push(review)
            })
        }
        else{
            console.log("no reviews found")
            
            }})

    if (!movieFound){
        console.log("adding new movie data")
            const newMovieData = {
                id:currMovie.id,
                name:currMovie.title,
                img:`https://image.tmdb.org/t/p/w500${currMovie["poster_path"]}`,
                reviews:[]
            }
            fetch("http://localhost:3001/movies/", {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data', "Content-Type": 'application/json',
                },
                body: JSON.stringify(newMovieData)
                })
                .then (res => res.json())

                console.log("new movie data logged")

                setNewMovieData()

    }

    function setNewMovieData(){
        fetch("http://localhost:3001/movies")
    .then((res) => res.json())
    .then((movieData) => {setMovieData(movieData)

    })
    }
    return(
        <div>
            <Header/>
            <h2 className ="title">{currMovie.title} <span> ({currMovie["release_date"].slice(0,4)})</span></h2>
            <div className="imagereview">
            <img src={`https://image.tmdb.org/t/p/w500/${currMovie["poster_path"]}`} width="140" height="210"/>
            </div>
            <div class="reviewButton">
                <NavLink
                to={`/add`}
                exact
                >
                <button type="button">Add A Review</button>
                </NavLink>
            </div>
            <ul>
                {reviews.map((review)=>{
                    return(
                    <Review id={review.id} review={review}/>
                )})}
            </ul>
            <div className="reviewContent">

            </div>
        </div>
    )

    

}

export default ReviewPage;