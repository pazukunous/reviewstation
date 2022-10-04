import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import HomeReview from './HomeReview';
import ReviewPage from './ReviewPage';
import {useEffect, useState} from "react";
import { Route, Switch } from 'react-router-dom';

function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then((res) => res.json())
    .then((movieData) => {setMovieList(movieData)

    })
  },[]);
  
  return (
      <Switch>
      <Route path="/review/:id">
        <ReviewPage />
      </Route>
      <Route exact path="/">
        <div className='App'>
        <Header />
        <Search />
        <HomeReview movieList={movieList}/>
        </div>
      </Route>
      </Switch>
    
  
  );
}

export default App;
