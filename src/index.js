import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReviewPage from './ReviewPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Home() {
  return (
    <Switch>
    <Route path="/test">
      <Test/>
    </Route>
    <Route exact path="/">
      <App />
    </Route>
    </Switch>
  )
}

function Test(){
  return(
    <ReviewPage/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //remove strictmode lines during deployment
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
