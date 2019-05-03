import React from "react";
import "./PostContainer.css";
import IndPost from "../IndPost/IndPost";
import styled from 'styled-components';

function PostContainer(props) {
  return (
    <PostCont>
      {props.listProp.map((post, index) => {
        return <IndPost postProp={props} key={index} post={post} addLike={props.addLike}/>
      })}
      <div />
    </PostCont>
  );
}

export default PostContainer;

const PostCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4.6rem;
padding-bottom: 2rem;
`