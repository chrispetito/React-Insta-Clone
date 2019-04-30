import React from "react";
import "./PostContainer.css";
import IndPost from "../IndPost/IndPost";

function PostContainer(props) {
  return (
    <div className="post-container">
      {props.listProp.map((post, index) => {
        return <IndPost postProp={props} key={index} post={post} />;
      })}
      <div>
        {/* {props.dummyData.comments.map(post => {
          return <CommentSection commentProp={props} post={post} />;
        })} */}
      </div>
    </div>
  );
}

export default PostContainer;
