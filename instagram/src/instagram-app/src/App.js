import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";
// import CommentSection from './Components/CommentSection/CommentSection';

const posts = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      PostData: posts,
      dummyData,
      post: {}
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <SearchBar />
          <div>
            <div>
               <PostContainer listProp={this.state} />;
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
