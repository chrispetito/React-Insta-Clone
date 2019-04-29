import React from "react";
import "./CommentSection.css";

function CommentSection(props) {

    // const comments = {props.commentProp.post.comments}


    return (
 
        <div className='comment-section'>
      <div>
        <p>{props.commentProp.text}</p>
      </div>
        </div>
    );
}

export default CommentSection;