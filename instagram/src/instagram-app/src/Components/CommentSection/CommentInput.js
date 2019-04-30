import React from "react";
import "./CommentSection.css";

const CommentInput = props => {
  return (
    <div>
      <form onSubmit={props.handleComment}>
        <input
          className="comment-input"
          type="text"
          placeholder="Add comment... "
          onChange={props.newComment}
          value={props.text}
        />
      </form>
    </div>
  );
}

export default CommentInput;
