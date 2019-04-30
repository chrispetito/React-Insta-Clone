import React from "react";
import "./CommentSection.css";

function Comment(props) {
  // const comments = {props.commentProp.post.comments}

  return (
    <div className="comment-section">
      <p className='comment-username'>{props.comment.username}</p>
      <p className='comment-comment'>{props.comment.text}</p>
    </div>
  );
}

export default Comment;
