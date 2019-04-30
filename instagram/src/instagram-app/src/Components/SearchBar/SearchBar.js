import React from "react";
import "./SearchBar.css";
import instagram from "./instagram.svg";

function SearchBar(props) {
  return (
    <div className="NavBar">
      <img src={instagram} alt="Instagram Logo" className="insta-logo" />
      <h1 className="Title">Instagram</h1>
      <input className="search-box" placeholder="Search" onKeyDown={props.filter} />
      <div className="icon-box">
        <i id="nav-compass" className="far fa-compass" />
        <i id="nav-heart" className="far fa-heart" />
        <i id="nav-user" className="far fa-user" />
      </div>
    </div>
  );
}

export default SearchBar;
