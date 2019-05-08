import React from "react";
import "./Login.css";
import instagram from "./instagram (1).svg";
import styled from "styled-components";

function LoginPage(props) {
  return (
    <LogInContainer>
      <InstaLogoLogin src={instagram} alt="Instagram Logo" />
      <LoginHeader>Instagram</LoginHeader>
      <LogInBox>
          <LogInForm>
            <LogInField
              type="text"
              placeholder="Username"
              name="username"
              onChange={props.change}
            />
            <PasswordField
              type="text"
              placeholder="Password"
              name="password"
              onChange={props.change}
            />
            <LogInButton onClick={props.login}>LOG IN</LogInButton>
          </LogInForm>
      </LogInBox>
    </LogInContainer>
  );
}

export default LoginPage;

const LogInContainer = styled.div`
  width: 100%;
  height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`;
const InstaLogoLogin = styled.img`
  width: 50px;
  margin-top: 3rem;
`;
const LoginHeader = styled.h1`
  text-align: center;
  font-family: "Cookie", cursive;
  font-size: 4rem;
  margin: 0;
  width: 50%;
  margin-bottom: 1rem;
`;
const LogInBox = styled.div`
  margin-bottom: 25rem;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1),
    2px 0px 4px rgba(0, 0, 0, 0.1), -2px 0px 4px rgba(0, 0, 0, 0.1);
`;
const LogInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const LogInField = styled.input`
  width: 80%;
  height: 2.5rem;
  margin-bottom: 0.4rem;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 0.8rem;
  border: 1px solid #c4c4c4;
`;
const PasswordField = styled.input`
  width: 80%;
  height: 2.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 0.8rem;
  border: 1px solid #c4c4c4;
`;
const LogInButton = styled.button`
  width: 84%;
  height: 2.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
  border: none;
  background: #247ba0;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background: rgba(36, 123, 160, 0.8);
  }
`;
