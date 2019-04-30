import React from "react";
import "./IndPost.css";
import CommentSection from "../CommentSection/CommentContainer";
import CommentInput from "../CommentSection/CommentInput";

function IndPost(props) {
  return (
    <div className="individual-post">
      <div className="card-title">
        <img
          className="thumbnail-photo"
          src={props.post.thumbnailUrl}
          alt="thumbnail"
        />
        <p className="user-name">{props.post.username}</p>
      </div>
      <div>
        <img
          src={props.post.imageUrl}
          alt="post content"
          className="post-photo"
        />
      </div>
      <div className="comment-actions">
        <i id="heart-icon-comment" className="far fa-heart" />
        <i id="comment-icon-comment" className="far fa-comment" />
      </div>
      <div>
        <p className="likes-number">{props.post.likes} likes</p>
        <CommentSection
          className="comment-container"
          comments={props.post.comments}
        />
        <div>
          <p className="timestamp">2 HOURS AGO</p>
        </div>
        <CommentInput />
      </div>
    </div>
  );
}

export default IndPost;
