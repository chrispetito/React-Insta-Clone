import React from "react";
import "./SearchBar.css";
import instagram from "./instagram.svg";

function SearchBar() {
  return (
    <div className="NavBar">
      <img src={instagram} alt="Instagram Logo" className="insta-logo" />
      <h1 className="Title">Instagram</h1>
      <input className="search-box" placeholder="Search" />
      <div className="icon-box">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
}

export default SearchBar;
