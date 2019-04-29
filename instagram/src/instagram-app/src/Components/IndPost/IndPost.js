import React from "react";
import "./IndPost.css";
import CommentSection from "../CommentSection/CommentSection";

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
      <div className='comment-actions'>
      <i id='heart-icon-comment'className="far fa-heart" />
      <i id='comment-icon-comment'className="far fa-comment"></i>
      </div>
      <div>
        {props.post.comments.map(comment => {
            return <CommentSection commentProp={props} />
        })}
      
      </div>

    </div>
  );
}

export default IndPost;
