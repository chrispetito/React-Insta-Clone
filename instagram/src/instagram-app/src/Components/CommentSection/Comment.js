import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

function Comment(props) {
  // const comments = {props.commentProp.post.comments}

  return (
    <div className="comment-section">
      <p className="comment-username">{props.comment.username}</p>
      <p className="comment-comment">{props.comment.text}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
