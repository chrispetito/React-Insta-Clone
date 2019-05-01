import React from "react";
import "./Login.css";
import instagram from './instagram (1).svg'

function LoginPage(props) {
  return (
    <div className='log-in-container'>
          <img src={instagram}alt="Instagram Logo" className="insta-logo-login" />
        <h1 className='log-in-header'>Instagram</h1>
      <div className='log-in-box'>

        {
          <form className='log-in-form'>
            <input
              className="log-in"
              type="text"
              placeholder="Username"
              name="username"
              onChange={props.change}
            />
            <input
            className="password"
              type="text"
              placeholder="Password"
              name="password"
              onChange={props.change}
            />
            <button className='log-in-btn'onClick={props.login}>LOG IN</button>
          </form>
        }
      </div>
    </div>
  );
}

export default LoginPage;
