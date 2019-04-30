import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
