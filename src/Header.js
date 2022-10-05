import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header(){
    return(
        <div className="headerBar">
        <h1 className="headerStation">Review STATION</h1>

     
        <NavLink
        to="/"
        exact
        >
        <button className="Home"> Home </button>
        
        </NavLink>
        </div>

    )
}

export default Header;