import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";
// import CommentSection from './Components/CommentSection/CommentSection';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <SearchBar />
          <div>
              <PostContainer listProp={this.state.posts} />;
          </div>
        </div>
      </div>
    );
  }
}

export default App;
