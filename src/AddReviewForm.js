import React, {useState} from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import "./AddReviewForm.css"


function AddReviewForm({currMovie, movieList}){

    //set state for new review entry
    const [formInfo, setFormInfo] = useState({})

    // function to post new movie review to database
    function addMovieReview(e, formInfo){
        console.log("submitted")
        e.preventDefault()
        newInfo = {reviews:[...movieExists.reviews, formInfo]}
           fetch(`http://localhost:3001/movies/${currMovie.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/form-data', "Content-Type": 'application/json',
            },
            body: JSON.stringify(newInfo)
           }) 
           .then (response => response.json())
           
        setFormInfo({
            name: '',
            stars: 1,
            review: ''
    })
        console.log(formInfo)
    }

    console.log(`currMovie is id ${currMovie.id}`)

    let movieExists = movieList.find((movie)=>{
        // console.log(movie.id)
        return (movie.id===currMovie.id)
    })

    console.log(movieList)
    console.log(movieExists)
    let newInfo = {reviews:[movieExists.reviews]}

    return (
        <div>
            <Header/>
             
            <h1>Write a new review for {currMovie.title} <span>({currMovie["release_date"].slice(0,4)})</span></h1>

            <div className=".form-container">
                <form onSubmit={(e) => {addMovieReview(e, formInfo)}}>
                <label>
                    Your name 
                    <input 
                    type="text"
                    value= {formInfo.name} 
                    onChange={e => setFormInfo({...formInfo, name: e.target.value})}/> 
                </label>
                              
                <label>
                
                    Your movie review
                    <textarea 
                    rows="10"
                    type ="text" 
                    value= {formInfo.review}
                    onChange={e => setFormInfo({...formInfo, review: e.target.value})}/>
                </label> 
                
                <label>
                    Your stars
                    <select 
                    name="stars" 
                    id="stars" 
                    value = {formInfo.stars} 
                    onChange={e => setFormInfo({...formInfo, stars: parseInt(e.target.value)})}>
                    <option value ='1'>⭐</option> 
                    <option value='2'>⭐⭐</option> 
                    <option value='3'>⭐⭐⭐</option> 
                    <option value='4'>⭐⭐⭐⭐</option> 
                    <option value='5'>⭐⭐⭐⭐⭐</option> 
                    </select> 
                </label>
                <input onClick={()=>{console.log("updated flag")}} type="submit" text="Submit Form"/>
            </form>
            </div>
        </div>
    )
}

export default AddReviewForm