import React from "react";
import "./CommentSection.css";

function Comment(props) {
  // const comments = {props.commentProp.post.comments}

  return (
    <div className="comment-section">
      <span>{props.comment.username}</span>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default Comment;
