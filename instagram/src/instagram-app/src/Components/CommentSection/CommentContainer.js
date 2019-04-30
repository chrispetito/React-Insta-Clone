import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
      return(
          <div>
              {this.state.comments.map((comment, index) => {
                  return <Comment comment={comment} key={index} />
              })}
          </div>
      )
  }

}

export default CommentSection;
