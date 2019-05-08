import React from "react";
import "./SearchBar.css";
import instagram from "./instagram.svg";
import styled from "styled-components";

function SearchBar(props) {
  return (
    <Header>
      <InstaLogo src={instagram} alt="Instagram Logo" />
      <NavHeader>Instagram</NavHeader>
      <NavSearch
        placeholder="Search"
        onChange={props.filter}
        onKeyDown={props.clear}
      />
      <IconBox>
        <i id="nav-compass" className="far fa-compass" />
        <i id="nav-heart" className="far fa-heart" />
        <i id="nav-user" className="far fa-user" />
      </IconBox>
    </Header>
  );
}

export default SearchBar;

const Header = styled.div`
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0;
  padding-left: 25.5%;
  position: fixed;
  background-color: white;
`;
const InstaLogo = styled.img`
  width: 30px;
  padding-right: 1%;
`;
const NavHeader = styled.h1`
  color: black;
  margin: 0;
  width: 200px;
  padding-left: 0.8%;
  font-family: "Cookie", cursive;
  font-size: 2rem;
  border-left: 2px solid black;
`;

const NavSearch = styled.input`
  border: 1px solid #c4c4c4;
  margin-left: 4.7%;
  height: 1.6rem;
  width: 11%;
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: #f8f8f8;
  padding-left: 0.4rem;
  padding-right: 0.4rem;

  ::placeholder {
    text-align: center;
    color: #c4c4c4;
  }
`;
const IconBox = styled.div`
  margin-left: 11.6%;
  width: 7%;
  display: flex;
  justify-content: space-between;
  color: #999999;
`;
