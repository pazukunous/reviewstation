import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import HomeReview from './HomeReview';
import ReviewPage from './ReviewPage';
import {useEffect, useState} from "react";
import AddReviewForm from './AddReviewForm';
import { Route, Switch } from 'react-router-dom';


function App() {
  const [movieList, setMovieList] = useState([])

  const [currMovie, setCurrMovie] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then((res) => res.json())
    .then((movieData) => {setMovieList(movieData)

    })
  },[]);
  
  return (

      <Switch>
      <Route path="/review/:id">
        <ReviewPage currMovie={currMovie} movieData={movieList} setMovieData={setMovieList}/>
      </Route>
      <Route exact path="/">
        <div className='App'>
        <Header />
        <Search setCurrMovie={setCurrMovie}/>
        <HomeReview movieList={movieList}/>
        <HomeReview movieList={movieList}/>
        </div>
      </Route>
      <Route path="/add">
        <AddReviewForm currMovie={currMovie} movieList={movieList} setMovieList={setMovieList}/>
      </Route>
      </Switch>
    
 
  );
}

export default App;
