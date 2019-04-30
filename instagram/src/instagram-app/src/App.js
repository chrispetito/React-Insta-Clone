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
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  filterResults = event => {
    const newPosts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ 
      posts: newPosts 
    });
  };

  clearSearch = event => {
    this.state.posts.filter(post => {
      if (event.target.value === '') {
        return post;
      }
    });
    this.setState({
      posts: dummyData
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <SearchBar filter={this.filterResults} clear={this.clearSearch} />
          <div>
            <PostContainer listProp={this.state.posts} />;
          </div>
        </div>
      </div>
    );
  }
}

export default App;
