import React from "react";
import "./IndPost.css";
import CommentSection from "../CommentSection/CommentContainer";
import styled from "styled-components";

class IndPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      liked: false
    };
  }

  toggleLike = prevState => {
    // console.log("newlike");
    if (this.state.liked === true) {
      this.setState({
        likes: this.state.likes - 1,
        liked: false
      });
    } else if (this.state.liked === false)
      this.setState({
        likes: this.state.likes + 1,
        liked: true
      });
  };

  render() {
    return (
      <IndivPost id={this.props.post.index}>
        <CardTitle>
          <ThumbnailPhoto src={this.props.post.thumbnailUrl} alt="thumbnail" />
          <UserName>{this.props.post.username}</UserName>
        </CardTitle>
        <PostPhoto src={this.props.post.imageUrl} alt="post content" />
        <CommentActions>
          {" "}
          <i
            onClick={this.toggleLike}
            //   id="heart-icon-empty"
            id={
              this.state.liked === true
                ? "heart-icon-filled"
                : "heart-icon-empty"
            }
            //   className="far fa-heart"
            className={
              this.state.liked === true ? "fas fa-heart" : "far fa-heart"
            }
          />
          <i id="comment-icon-comment" className="far fa-comment" />
        </CommentActions>

        <div>
          <LikesNumber>{this.state.likes} likes</LikesNumber>
          <CommentSection
            className="comment-container"
            comments={this.props.post.comments}
            id={this.props.post.imageUrl}
          />
        </div>
      </IndivPost>
    );
  }
}

export default IndPost;

const IndivPost = styled.div`
  height: 100%;
  margin-top: 1.6rem;
  width: 31.5%;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  min-width: 600px;
  background: white;
`;
const CardTitle = styled.div`
  display: flex;
  height: 3.6rem;
`;
const ThumbnailPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  margin-left: 1.1rem;
  margin-top: 1.1rem;
`;
const UserName = styled.p`
  margin-left: 0.6rem;
  font-size: 0.9rem;
  margin-top: 1.4rem;
  font-weight: bold;
`;
const PostPhoto = styled.img`
  width: 100%;
`;
const CommentActions = styled.div`
  margin-top: 0.8rem;
  margin-left: 1rem;
`;
const LikesNumber = styled.p`
margin-left: 1.1rem;
font-size: 0.9rem;
margin-top: 1rem;
font-weight: bold;
margin-bottom: 0;
`