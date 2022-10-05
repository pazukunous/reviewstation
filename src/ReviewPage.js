import React from "react";
import {useParams} from "react-router-dom"
import Header from "./Header";

function ReviewPage(){

    const params = useParams()

    console.log(params)

    return(
        <div>
        <Header />
        <h1>Reviews for movie {params.id}</h1>
        </div>
    )

    

}

export default ReviewPage;