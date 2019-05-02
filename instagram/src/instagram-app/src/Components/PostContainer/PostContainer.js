import React from "react";
import "./PostContainer.css";
import IndPost from "../IndPost/IndPost";

function PostContainer(props) {
  return (
    <div className="post-container">
      {props.listProp.map((post, index) => {
        return <IndPost postProp={props} key={index} post={post} addLike={props.addLike}/>
      })}
      <div />
    </div>
  );
}

export default PostContainer;
