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
  display: flex;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  font-size: 0.9rem;
  margin: 0.8rem 0;
`;
const CommentText = styled.p`
overflow: visible;
margin: 0;
  strong {
    margin-right: 3px;
  }
`;
