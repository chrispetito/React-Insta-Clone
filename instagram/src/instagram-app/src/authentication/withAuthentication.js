import React from "react";
// import LoginPage from '../Components/Login/LoginPage';

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    Login = event => {
      console.log("login event");
      event.preventDefault();
      if (localStorage.getItem("user")) {
          localStorage.removeItem('user')
        this.setState({
          loggedIn: false
        });
      } else {
        localStorage.setItem("user", this.state.username);
        this.setState({
          loggedIn: true
        });
      }
    };

    render() {
      console.log("its working");
      if (this.state.loggedIn === true) {
        return <PostsPage />;
      } else {
        return <LoginPage change={this.handleChange} login={this.Login} />;
      }
    }
  };

export default withAuthenticate;
