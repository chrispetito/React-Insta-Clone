import React from "react";
import "./App.css";
// import dummyData from "./dummy-data";
// import SearchBar from "./Components/SearchBar/SearchBar";
// import PostContainer from "./Components/PostContainer/PostContainer";
import PostsPage from "./Components/PostContainer/PostsPage";
import LoginPage from './Components/Login/LoginPage';
// import CommentSection from './Components/CommentSection/CommentSection';
import withAuthenticate from './authentication/withAuthentication';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    return (
      <div className="App">
      <ComponentFromWithAuthenticate />
      </div>
    );
  }
}



export default App;
