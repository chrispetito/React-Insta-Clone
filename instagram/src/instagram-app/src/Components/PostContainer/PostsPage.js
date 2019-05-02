import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [], 
        newPosts: [],
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
    });
  }


  filterResults = event => {
    const newPosts = this.state.posts.filter((post, index) => {
      if (post.username.includes(event.target.value)) {
        return post;
      } 
    });
    // console.log(newPosts);
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
    console.log("its working");
    return (
      <div className="Header">
        <SearchBar filter={this.filterResults} clear={this.clearSearch} />
        <div>
          <PostContainer listProp={this.state.posts} />;
        </div>
      </div>
    );
  }
}

export default PostsPage;
