import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";
import styled from "styled-components";

function Comment(props) {
  // const comments = {props.commentProp.post.comments}

  return (
    <CommentSection key={props.index}>
      <CommentText>
        <strong> {props.comment.username} </strong> {props.comment.text}
      </CommentText>
    </CommentSection>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;

const CommentSection = styled.div`
  height: 1.4rem;
  display: flex;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  padding-top: 0.2rem;
  margin-top: 0;
`;
const CommentText = styled.p`
  strong {
    margin-right: 3px;
  }
`;
