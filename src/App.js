import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import HomeReview from './HomeReview';
import {useEffect, useState} from "react";

function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then((res) => res.json())
    .then((movieData) => {setMovieList(movieData)

    })
  },[]);
  
  return (
    <div className="App">
      <Header />
      <Search />
      <HomeReview movieList={movieList}/>
    </div>
  );
}

export default App;
